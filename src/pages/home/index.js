import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {  LoginForm, Main, DivText } from './style'
import { Container} from '../../components/Container'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import logo from '../../images/logoUrl.png'
import api from '../../service/api'
import { localStorageGetToken, localStorageSetToken} from '../../service/localStorage'


function Home(){
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  

  

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', infos);

      if (response.status !== 201) {
        console.log('Erro no login', 'Credenciais inválidas', 'danger');
      }

      if (response.data.token) {
        localStorageSetToken(response.data.token);
      }

      return history.push('/');
    } catch (error) {
      
      
    }
  };

  const handleInputChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

    return(
    <div>
      <Main>
        <DivText>
       <h1>Bem vindos</h1>
       <p><Typical
        steps={['Ao', 1000]}
        loop={Infinity}
        ></Typical>
        </p>
        <h5><Typical
        steps={['Encurtador de Urls <3', 500]}
        loop={Infinity}
        ></Typical></h5>
        <img src={logo} alt='logoUrl'/>
        </DivText>
        <Container>
          <div>
            <p>Login</p>
            <Link to='/cadastro'><a>Cadastro</a></Link>
          </div>
            <LoginForm onSubmit={onFormSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Usuario"
            onChange={handleInputChange}
            
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            onChange={handleInputChange}
            
          />
          <button type="submit">Entrar</button>
        </LoginForm>  

        </Container>
      </Main>  
        </div> 
    )
}




export default Home;