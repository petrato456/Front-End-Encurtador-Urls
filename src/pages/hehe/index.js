import React,{useState,useEffect} from "react"
import {Container} from '../../components/Container'
import api from '../../service/api'


function Hehe(){
   const [infosRecebida,setInfosRecebida] = useState([])

   useEffect(()=>{
    async function loadInfosrecebida(){
     
        const response = await api.get('/url');
        console.log(response.data.urls);
    
        setInfosRecebida(response.data.urls);}
        loadInfosrecebida()
   },[])

    return(
        
            
        <Container >
            {infosRecebida.map((info)=>(
            <h1>{info.urlHash}</h1>
            ))}
        </Container>
            
        
    )
}

export default Hehe