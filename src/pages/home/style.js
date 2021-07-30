import styled from "styled-components";


export const Header = styled.header`

display: flex;
 align-items: center;
 border-bottom: 1px solid #eee;
 background-color: #fff;
 padding-top: 15px;
 

 img{
    width: 60px;
    margin-left: 10%;
    
 }
 h1{
    margin-left:50% ;
 }
 `
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
    margin-top: 30px;
    background-color: #E6E6FA;
    color: violet;
    height: 50px;
    font-size: 14px;
    margin-top: 80px;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background-color: #ff9839
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
width: 500px;

@media(max-width: 800px) {
  display :flex ;
  padding: 20px;
     font-size: 20px;
     background-color: red;
}

h1{
  color: #fff;
  font-size: 70px;
  font-weight: 400;
  
}
@media(max-width: 500px) {
     h1 {
       font-size: 40px;
     background-color: red;
     }
     
p{
  display: flex;
  align-items: center;
  justify-content: center;
  color:purple;
  font-size: 40px;
  margin-top: 20px;
  width: 150px;
}

@media(max-width: 800px) {
  p{
     font-size: 20px;
  }
h5{
  display: flex;
  align-items: center;
  justify-content: center;
  color:purple;
  font-size: 40px;
  margin-top: 40px;
  width: 150px;
  border: none;
}
img{

  margin-left: 140px;
  border-radius: 40%;
  margin-top: 40px;
}
@media(max-width: 800px) 
{img {
     margin-left: 20px;
     width: 150px;

}
}
`

