import styled from "styled-components"


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? `translateX(0)` : `translateX(-100%)`};
        top: 0;
        left: 0;
        height:100vh;
        width: 300px;
        padding-top: 3.5rem;
        //transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
            padding-top: 60px;
        }
    }
`
export default function LeftNav ( props ){

    window.history.forward();
    const logout = () => {
        document.location.href='/LoginMain'
    }

    return(
        <Ul open = {props.open} >
            <li onClick={ () => {props.moveMain()} }>Main</li>
            <li onClick={ ()=>{props.moveMyPage()} }>MyContent</li>
            <li onClick={ ()=>{props.moveMyInfo()} }>MyInfo</li>
            <li onClick={ ()=>{props.withdrawal()} }>회원탈퇴</li>
        </Ul>
    );
}