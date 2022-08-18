import { useState } from "react"
import styled from "styled-components"
import MyPageLeftNav from "./MyPageLeftNav"

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 20;
    display: none;
    
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? `#ccc` : '#333'};
        border-radius: 10px;
        transform-origin: bottom left;
        transition: all 0.3s linear;
        
        &:nth-child(1) {
            transform: ${({open}) => open ? `rotate(45deg)` : `rotate(0)`};
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? `translateX(-100%)` : `translateX(0)`};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? `rotate(-45deg)` : `rotate(0)`};
        }
    }
`;


export default function MyPageBurger( props ) {
    const [open, setOpen] = useState(false)

    return(
        <>
        <StyledBurger open = {open} onClick={ () => setOpen( !open )}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <MyPageLeftNav nic = { props.nic } 
                    open = { open }
                    moveMain = { props.moveMain }
                    moveMyPage = { props.moveMyPage }
                    moveMyInfo ={ props.moveMyInfo }
                    withdrawal = { props.withdrawal } />
        </>
    )
}