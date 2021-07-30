import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 500px;
  background-color: #F8F8FF;
  color:#9370DB;
  align-items: center;
  border-radius: 14px;
  margin: 50px auto;
  cursor: default;
  box-shadow: 3px 3px 3px 3px #B0C4DE; 

  @media(max-width: 800px) {
   
   
 }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
  }
  a {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    text-decoration: none;
    
    
  }
  
  p {
    font-size: 20px;
    margin-right: 40px;
  }
  a :hover{
    border-bottom: 3px solid blueviolet;
    color: violet;
  }
  
   }
  img {
    max-width: 250px;
  }
`;
