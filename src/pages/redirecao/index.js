import React,{useState,useEffect} from "react"
import {Container} from '../../components/Container'
import api from '../../service/api'


function Redirecao(){
   const [infosRecebida,setInfosRecebida] = useState([""])

   useEffect(()=>{
   
    async function loadInfosrecebida(){
        const response = await api.get('/url');
        console.log(response.data.urls);
    }



    
    loadInfosrecebida();
            
   },[])


    return(
        
            
        <Container >
            
        </Container>
            
        
    )
}

export default Redirecao;