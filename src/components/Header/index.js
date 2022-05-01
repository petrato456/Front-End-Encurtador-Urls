import * as Styles from './style'

import logo from '../../assets/logo192.png'

export default function Header(){
    return(
        <Styles.WrapperHeader>
            <img src={logo} alt='logo'></img>

            <p>Bem Vindo(a)</p>
        </Styles.WrapperHeader>
    )
}