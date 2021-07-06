import styled from 'styled-components'

export const LoginForm = styled.form`
margin-top: 30px;
display: flex;
flex-direction: column;


 input {
   padding: 10px;
   margin: 4px;
   border-radius: 5px;
   width: 300px;
   height: 50px;
   margin-top: 30px;
   background: none;
   outline: none;
   border: none;
   border-bottom: 1px solid red;

   
}
   
 }
 button {
   padding: 10px;  
   border-radius: 5px;
   width: 300px;
   margin: 4px;
   margin-top: 10px;
   background-color: #E6E6FA;
   color: violet;
   height: 50px;
   font-size: 14px;
   margin-top: 50px;
   border: none;
 }
 button:hover {
   cursor: pointer;
   background-color: #ff9839;
 }
`
export const Main = styled.div`
background-color:violet;
display: flex;
align-items: center;

`
export const DivText = styled.div`
display:flex;
flex-direction: column;
margin-left: 20%;

h1{
  color: #fff;
  font-size: 70px;
  font-weight: 400;
}
p{
  display: flex;
  align-items: center;
  justify-content: center;
  color:purple;
  font-size: 40px;
  margin-top: 20px;
}
h5{
  display: flex;
  align-items: center;
  justify-content: center;
  color:purple;
  font-size: 40px;
  margin-top: 40px;
  border: none;
}
img{

margin-left: 140px;
width: 150px;
border-radius: 40%;
margin-top: 40px;
}
`