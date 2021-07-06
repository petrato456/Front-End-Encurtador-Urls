import React, { useState, useEffect } from 'react';
import {Header, Main, Rodape, Ul, LoginForm } from './style';
import logo from '../../images/logo192.png';
import api from '../../service/api';
import {Redirect, useHistory} from 'react-router-dom'
import { localStorageGetToken } from '../../service/localStorage';





function App(){                       
    //  Chamada de url---------------------------------------------------------
    // const history = useHistory();
    
   
    const [infosUrl, setInfosUrl] = useState({
      url: '',
    })

    const onFormSubimit = async(e) =>{
      e.preventDefault();

   try {
    
     api.post('/url',infosUrl)
         
   } catch (error) {
     
   }
    console.log(infosUrl)
  }
    
  const handleInputChange = (e) => {
    setInfosUrl({...infosUrl, [e.target.name]: e.target.value });
  }
  

  //  ---------------------------------------

  const [infos,setInfos] = useState([])
    async function loadInfos(){
      const {data} = await api.get("/url")
      console.log(data.urls);
  
      setInfos(data.urls);

    }

    function golink(loadInfos){
       const { url,urlHash } = infos;
       const igual  = urlHash + " "+ url;
       
       
       
       console.log()
     console.log(igual)

    }

  
    
  return (
    <div className="App" >
  
      <Header > 
  <img src={logo}/>  
        <h1>Bem vindo(a)
          
        </h1>
      </Header> 
      
      
      <Main >
        <h1>Encurtador de links do</h1>
        <h4>Digite um endereço para guardar na sua agenda</h4>
        <LoginForm onSubmit={onFormSubimit}>
        <input 
        type="text"
        name="url"
        placeholder="Ex: ahsahhsahshsaha.com"
        onChange={handleInputChange}>
        </input>
        <button type='submit' onClick={()=>loadInfos()} >Adicionar</button>
        </LoginForm>
    
        <h3>Link encurtado</h3>
      </Main>
       {infos.map((info) =>
        <Ul key={info.id}>
          <li onClick={golink}>{info.urlHash}</li>
        </Ul>
       )}
  
      <Rodape>
          <p>2021</p>
        </Rodape>
    </div>
        );
}

export default App;
