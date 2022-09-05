const expres = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
const fetch = require("node-fetch");

//db정보
const dbconfig = require('./config/Database.js');

//youtubekey 정보
const youtubeConfig = require('./config/Youtube.js');

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

//게시판 리플 데이터 저장
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
      console.log(err);
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
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${ accessToken }`
    )
  } catch (e) {
    console.log(e)
  }
  //console.log("받아온데이터567",data)// return 구글 가입정보
  connection.query(sql,[ data.email ],(err, rows, field)=>{
    //console.log("받아온 데이터123",rows[0]);
    //console.log("받아온 데이터",[{email:data.email}])
    if(rows[0] !== undefined){
      //res.send([rows[0].nicname]);
      res.send(rows);
    }
    else
      res.send([{email: data.email}]);
  })

  //res.send(data);
})

// access토큰을가지고 카카오 로그아웃 진행
app.get('/api/oauth/kakao/logout', (req, res) => {
  const url = 'https://kapi.kakao.com/v1/user/logout';

})

// 인가코드를 가지고 카카오에 사용자 정보 요청
app.post('/api/oauth/kakao', async (req, res) => {
  let sql = 'SELECT * FROM cc_camp.Users WHERE email = ?'
  const { data } = await axios({
    method: 'POST',
    headers: {
        Authorization: `Bearer ${req.body.accessToken}`,
        "Content-type": "application/json",
    },
    url: 'https://kapi.kakao.com/v2/user/me'
  });
  console.log(data);
  connection.query(sql,[ "kakao"+data.id ],(err, rows, field)=>{
    if(rows[0] !== undefined){
      console.log("0번째임",rows[0]);
      //res.send([rows[0].nicname]);
      res.send(rows);
    }
    else
      res.send([{email: data.email}]);
  })
})

// write에서 보내온 데이터로 DB에 저장
app.post('/api/boardpost', (req, res) => {
  let sql = 'INSERT INTO cc_camp.Board VALUES (null, ?, ?, ?, CURRENT_TIMESTAMP, 0)';
  let nicname = req.body.nicname;
  let title = req.body.title;
  let content = req.body.content;
  let params = [nicname, title, content];
  connection.query(sql, params,
    (err, rows, fields) => {
      //console.log(err);
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
app.get('/api/youtube', async (req, res) => {
  const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURI('캠핑')}&maxResults=30&viewcount&key=${youtubeConfig.key}`)
  // 유튜브에서 하루에 데이터를 요청할 수있는 양이 정해져있어 개발단계에선
  // 일단 응답으로 온 json데이터를 직접 적어 넣어뒀다
    res.send(
      data
    )
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));