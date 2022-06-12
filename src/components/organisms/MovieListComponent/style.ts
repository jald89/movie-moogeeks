import styled from "styled-components"

export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const Title = styled.h2`
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0 20px 10px;
`