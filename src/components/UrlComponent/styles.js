
import styled from 'styled-components';

export const WrapperUrlComponent = styled.div`
width: 100%;
height: 100%;
padding: 0px 2.5%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;

h1{
    font-size: 55px;
    color: #000;
}
form{
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    
    input{
    width: 100%;
    height:35px;
    border: 2px solid violet;
    padding: 20px;
    }

    button{
        width: 150px;
        height: 40px;
        cursor: pointer;

        background-color: violet;
        color: #fff;
        border: none;
        border-radius: 5px;

        &:hover{
            font-size: 14px;
        }
    }
}

`
