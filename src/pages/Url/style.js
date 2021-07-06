import styled from 'styled-components';

export const Header = styled.header`

 display: flex;
 align-items: center;
 height: 100px;
 border-bottom: 1px solid #eee;
 background-color: violet;
 

 img{
    width: 60px;
    margin-left: 10%;
 }

 h1{
    margin-left:50%;
    color: #fff;
 }
`
export const Main = styled.main`
display:flex;
align-items: center;
flex-direction: column;
padding: 0;
margin: 0;


h1{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 125px;
   width: 600px;
   border-radius: 5px;
   margin-top: 20px;
   font-size: 50px;
   
}
h4{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 600px;
   height: 50px;
   
   margin-top: 10px;

}
input{
   border-radius: 5px;
   width: 100%;
   height: 45px;
   margin-top: 10px;
   border-color: violet;
   
   
}
button{
   width: 10%;
   height: 40px;
   border-radius: 5px;
   background-color: violet;
   margin-left: ; 
   color: #fff;
   border-color: #E6E6FA;
}
button:hover {
    cursor: pointer;
    background-color: #ff9839
}
h3{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 600px;
   height: 50px;
   border-radius: 15%;
   
   margin-top: 10px;
}`

export const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   width: 400px;   
   list-style: none;
   margin-top: 10px;
   margin-left: 36%;

li{
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 5px;
   height: 30px;
   background-color: red;
}
`

export const Rodape = styled.footer`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
height: 60px;
background-color: #fff;
margin-top: 90px;

p{
   color: violet;
}

`
export const LoginForm = styled.form`
display:flex;
align-items: center;
width: 100%;
height: 20%;
`