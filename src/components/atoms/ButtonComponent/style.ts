import styled from "styled-components"

export const Button = styled.button`
    display: inline-block;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.35em 1.2em;
    border: 0.1em solid #222;
    margin: 0 0.3em 0 0;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #222;
    text-align: center;
    transition: all 0.2s;
    
    :not(:disabled) {
        cursor: pointer;
    }

    &&:hover:not(:disabled) {
        background-color: #222;
        color: #fff;
    }
`