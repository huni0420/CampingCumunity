const expres = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
//db정보
const dbconfig = require('./config/Database.js');
const axios = require('axios')

const app = expres();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


//실제 db연결
const connection = mysql.createConnection({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  databases: dbconfig.databases
});
connection.connect();

app.post('/api/replyboard', (req, res) => {
  let sql = 'INSERT INTO cc_camp.BoardReply VALUES (null, ?, ?, ?, CURRENT_TIMESTAMP)';
  let nicname = req.body.nicname;
  let content = req.body.content;
  let boardnum = req.body.boardnum;
  console.log(nicname)
  console.log(content)
  console.log(boardnum)
  let params = [ nicname, content, boardnum ];
  connection.query(sql, params, (err, rows, field) =>{
    res.send(rows);
  })
})

//post 조회시 조회수 +1해줌
app.post('/api/viewcount', (req, res) => {
  let sql = 'UPDATE cc_camp.Board SET boardview = boardview + 1 where boardnum = ?';
  let boardnum = req.body.boardnum;
  connection.query(sql, [boardnum], 
    (err, rows, fields) => 
    {res.send(rows)});
})

//회원탈퇴할때 유저가쓴 게시물 삭제
app.get('/api/deleteboard', (req, res) => {
  const nic = req.query.nicname;

  connection.query(
    'DELETE FROM cc_camp.Board WHERE nicname = ?', [nic],
    (err, rows, field) => {
      res.send('회원 탈퇴가 완료되었습니다.')
    }
  )
})

//회원탈퇴
app.get('/api/deleteuser', (req, res) => {
  const nic = req.query.nicname;

  connection.query(
    'DELETE FROM cc_camp.Users WHERE nicname = ?', [nic],
    (err, rows, field) => {
      res.send({alarm:'회원 탈퇴가 완료되었습니다.'})
    }
  )
})

//닉네임과 닉네임으로 쓴 글에 닉네임을 변경 병경하기위해 사용
app.post('/api/updatenicname', (req, res) => {
  let nicnameSql = 'UPDATE cc_camp.Users SET nicname = ? WHERE nicname = ?'
  let boardInNicnameSql = 'UPDATE cc_camp.Board SET nicname = ? WHERE nicname = ?'
  let newNicname = req.body.newNicname;
  let nicname = req.body.nicname;
  let params = [newNicname, nicname];
  connection.query(nicnameSql, params, 
    (err, rows, fields) => {
      console.log('성공1')
    }
  )
  connection.query(boardInNicnameSql, params,
    (err, rows, fields) => {
      console.log('성공2')
    })
})

//존재하지 않는 회원이면 nicname생성
app.post('/api/createnicname', (req, res) => {
  let sql = 'INSERT INTO cc_camp.Users (nicname, email) VALUES (?, ?)';
  let nicname = req.body.nicname;
  let email = req.body.email;
  //console.log(nicname)
  //console.log(email)
  let params = [nicname, email];
  connection.query(sql, params,
    (err, rows, fields) => {
      try {
        res.send(rows);
      } catch (erorr) {
        erorr(err);
      }
    })
})

// accessToken을 가지고 구글에 사용자 정보 요청
app.post('/api/oauth/google', async (req, res) => {
  let sql = 'SELECT * FROM cc_camp.Users WHERE email = ?'
  const {accessToken} = req.body;
  const { data } = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${ accessToken }`
  )
  //console.log(data)// return 구글 가입정보
  connection.query(sql,[ data.email ],(err, rows, field)=>{
    console.log(rows[0]);
    console.log([{email:data.email}])
    if(rows[0] !== undefined){
      //res.send([rows[0].nicname]);
      res.send(rows);
    }
    else
      res.send([{email: data.email}]);
  })

  //res.send(data);
})

// write에서 보내온 데이터로 DB에 저장
app.post('/api/boardpost', (req, res) => {
  let sql = 'INSERT INTO cc_camp.Board VALUES (null, ?, ?, ?)';
  let nicname = req.body.nicname;
  let title = req.body.title;
  let content = req.body.content;
  let params = [nicname, title, content];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    })
})

// 게시판 번호를 이용, Reply데이터를 받아옴.
app.get('/api/boardreply', (req, res) => {
  const boardnum = req.query.boardnum;
  const url = 'SELECT * FROM cc_camp.BoardReply WHERE boardnum = ?';

  connection.query( url, [ boardnum ], ( err, rows, field ) => {
    res.send(rows);
  });
})

// 게시판 번호를 이용해서 DB에서 맞는 게시판번호의 데이터를 client에 전달
app.get('/api/post',(req, res) => {
  // ?[파라메터 명]=[파라메터 값] 으로 온 요청을 받는다
  const num = req.query.boardnum;  // req.query.[파라메터 명]은 [파라메터 값]이 된다.
  //console.log(num); // 1
  //
  connection.query(
    'SELECT * FROM cc_camp.Board WHERE boardnum = ?', [num]
    ,(err, rows, field)=>{
      res.send(rows);
    }
    )
  })

// 게시판목록을 불러옴
app.get('/api/board', (req, res) => {
  const title = req.query.title
  const nicname = req.query.nicname

  if( title != '' && title != undefined){
    const url = 'SELECT * FROM cc_camp.Board WHERE title LIKE ?'
    const params = ['%'+title+'%']
    connection.query(url, params, (err,rows,field)=>{
      res.send(rows);
      //console.log("ti",rows)
    })
  }
  else if( nicname != '' && nicname != undefined ){
    const url = 'SELECT * FROM cc_camp.Board WHERE nicname LIKE ?'
    const params = ['%'+nicname+'%']
    connection.query(url, params, (err,rows,field)=>{
      res.send(rows);
      //console.log("ni",rows)
    })
  }
  else {
    connection.query(
      "SELECT * FROM cc_camp.Board",
      (err, rows, fields) => {
        res.send(rows);
      //console.log("al",rows)
      }
    )
  }
})

// 유튜브에서 가져온 리스트를 client에 전달
app.get('/api/youtube', (req, res) => {
    res.send([
        {
            "kind": "youtube#searchListResponse",
            "etag": "vu3ON-HJHaTVS6V1rFKZz4qWV1U",
            "nextPageToken": "CAUQAA",
            "regionCode": "KR",
            "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 5
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "HvBa9h2VdVyETGF3tfB9suYe5PM",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "JIpVpq6m56s"
                },
                "snippet": {
                  "publishedAt": "2022-08-10T12:00:19Z",
                  "channelId": "UCoamU2-EbzYerzLbJkIiJUg",
                  "title": "캠핑 | 새 텐트와 우중캠핑 | 캠핑브이로그 | 무쇠냄비요리 | 캠플 인디언텐트 | 캠핑인센스 | camp | camping",
                  "description": "본 영상은 '캠플'과 '노티프'의 유료광고 영상을 포함하고 있습니다. 안녕하세요 뮤리의 숲이에요 :) 너어무 오랜만이죠.... 여태 나만 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/JIpVpq6m56s/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/JIpVpq6m56s/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/JIpVpq6m56s/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "뮤리의 숲_forest camping",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-08-10T12:00:19Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "zk4W8bbLQKuhu2GEZajkDenGKQk",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_SgNV9lQl5s"
                },
                "snippet": {
                  "publishedAt": "2022-08-07T09:31:11Z",
                  "channelId": "UCw5X6yzXwIcaSzJAQsL69Ug",
                  "title": "하루종일 비 내리는 날, 경차로 여름휴가 떠나기 | 개별화장실 계곡 앞 신생캠핑장 | 홍천 을수골 별빛캠핑장",
                  "description": "인스타그램: jojo_camping #홍천캠핑장 #우중차박 #여름휴가 -영상에 사용된 장비- 침낭 : 큐물러스 - 파냠 450, 테네카 850 야전침대 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_SgNV9lQl5s/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_SgNV9lQl5s/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_SgNV9lQl5s/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "조조캠핑",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-08-07T09:31:11Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "a2ROdeJaacZfeiMTIpgFBM-Ynsk",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "VSP_YCjwCUo"
                },
                "snippet": {
                  "publishedAt": "2022-07-31T11:50:27Z",
                  "channelId": "UCw5X6yzXwIcaSzJAQsL69Ug",
                  "title": "1박2일 내내 쏟아지는 폭우 속 우중캠핑 | 새 화로대 개시했어요 | 가평 블루문캠핑장",
                  "description": "인스타그램: jojo_camping #우중캠핑 #우중솔캠 #애견동반캠핑 -영상에 사용된 장비- 침낭 : 큐물러스 - 파냠 450 폴딩박스 : 카고 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/VSP_YCjwCUo/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/VSP_YCjwCUo/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/VSP_YCjwCUo/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "조조캠핑",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-07-31T11:50:27Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "HHu_yMYUiacCfhzx0efyIxK2iQQ",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_938NGqKwV8"
                },
                "snippet": {
                  "publishedAt": "2022-08-03T09:53:21Z",
                  "channelId": "UCT107q7vwRGAaActQ1oe7hA",
                  "title": "오토캠퍼들이 가장 갖고싶은 장비 1순위ㅣ캠핑 테트리스 이제 안녕ㅣ명불허전 다시찾은 계곡캠핑장ㅣ",
                  "description": "본 영상은 코토의 제품협찬을 포함하고 있습니다. 안녕하세요 여러분! 오늘은 드디어 기다리고 기다리던 코토 루프박스를 장착하고 첫 ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_938NGqKwV8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_938NGqKwV8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_938NGqKwV8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "반반한캠핑",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-08-03T09:53:21Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "cduz2nopEM30lqUZW0quGrJ9Oyg",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "st9pYxDT4IA"
                },
                "snippet": {
                  "publishedAt": "2022-08-08T13:00:17Z",
                  "channelId": "UCeyU98dnBQ18KdThUqSvBtA",
                  "title": "폭우내리는 숲속, 혼술 우중캠핑은 완벽했다 / 2000원 화로대 숯불장어구이&amp;막걸리/ 1인용 초간단 손수제비 / 막걸리탐험대",
                  "description": "솔로캠핑 #남양주 #우중캠핑 - 이번 영상은 남양주시의 지원을 받아 제작되었습니다. 리랑이 남양주에서 도전한 '무지출 챌린지 캠핑' ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/st9pYxDT4IA/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/st9pYxDT4IA/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/st9pYxDT4IA/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Rirang OnAir",
                  "liveBroadcastContent": "none",
                  "publishTime": "2022-08-08T13:00:17Z"
                }
              }
            ]
          }
    ])
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));