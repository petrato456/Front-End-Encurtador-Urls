
import { LoginForm, Main, DivText} from './style'
import { Container} from '../../components/Container'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import logo from '../../images/logoUrl.png'


function cadastro(){
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
        <Link to='/'><a>Login</a></Link>
        <p>Cadastro</p>
      </div>
        <LoginForm >
        <input
        type="text"
        name="nome-usuario"
        id="nome-usuario"
        placeholder="Nome de usuario"
        
      />

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        
      />
      
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        
      />
      
      <button type="submit">Cadastrar</button>
    </LoginForm>  

    </Container>
    </Main>
</div> 
)
}




export default cadastro;
