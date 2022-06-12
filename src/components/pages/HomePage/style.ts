import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
`

export const Container = styled.div`
    width: 100%;
    padding: 0.375rem 0.75rem;
`

export const Nav = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3f3;
    padding: 10px 20px;
`
export const NavTools = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    align-items: center;

    & > * {
        min-width: 80px;
    }
`

export const InputText = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
