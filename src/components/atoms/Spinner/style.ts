import styled, { keyframes } from "styled-components"

const move = keyframes`
    0%{
        transform: translateX(-31em);
        opacity: 0;
    }
    30%,60%{
        transform: translateX(0);
        opacity: 1;
    }
    100%{
        transform: translateX(31em);
        opacity: 0;
    }
`

const moveRight = keyframes`
    0%{
        transform: translateX(31em);
        opacity: 0;
    }
    30%,60%{
        transform: translateX(0);
        opacity: 1;
    }
    100%{
        transform: translateX(-31em);
        opacity: 0;
    }
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`
export const Span = styled.span`
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    margin: 0 0.125em;
    background-color: rgb(235, 217, 217);
    opacity: 0;

    &&:last-child{
        animation: ${moveRight} 3s infinite;
        animation-delay: 100ms;
        background-color: #000;
    }
    &&:nth-child(5){
        animation: ${move} 3s infinite;
        animation-delay: 200ms;
        background-color: rgb(109 109 109);
    }
    &&:nth-child(4){
        animation: ${moveRight} 3s infinite;
        animation-delay: 300ms;
        background-color: #000;
    }
    &&:nth-child(3){
        animation: ${move} 3s infinite;
        animation-delay: 400ms;
        background-color: rgb(109 109 109);
    }
    &&:nth-child(2){
        animation: ${moveRight} 3s infinite;
        animation-delay: 500ms;
        background-color: #000;
    }
    &&:first-child{
        animation: ${move} 3s infinite;
        animation-delay: 600ms;
        background-color: rgb(109 109 109);
    }
`