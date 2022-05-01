import styled from 'styled-components';

export const WrapperUrl = styled.div`
width: 100%;
height: 58.3vh;

display: flex;
align-items: center;
flex-direction: column;
gap: 90px;

.list{
   width: 100%;
   max-width: 400px;
   padding-bottom: 60px;
   padding:0 2.5% 40px 2.5%;
   
   ul{
      width: 100%;
      list-style: none;

      li{
         width: 100%;
         padding:10px 15px 10px 15px;
         border: 1px dashed violet;
         cursor: pointer;
         background-color: #fff;
         color: #000;

         display: flex;
         align-items: center;
         justify-content: space-between;

         i :hover {
            color: green;
         }
      }
   }
}

`

