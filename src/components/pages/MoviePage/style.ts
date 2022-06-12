import styled from "styled-components"

export const ContainerMovie = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto 0;
`

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 30px;

    & b {
        font-weight: bold;
    }
`

export const Poster = styled.img`
    width: 100%;
    max-width: 400px;
`