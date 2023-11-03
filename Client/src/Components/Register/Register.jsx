import logoName from '../../assets/sbotnetxt.png'
import logo from '../../assets/sbotnet-izq.png'
import style from './Register.module.css'
import { Link } from 'react-router-dom'

export default function Register(){
    return(
        <div className={style.container_register}>
        <div className={style.container_presentation}>
            <div className={style.container_description}>
                <img src={logo} alt="logo-sbotnet" />
                <p className={style}>"¡Bienvenido a nuestra comunidad tecnológica! En nuestro mundo digital, la innovación y la pasión por la tecnología se encuentran en cada rincón. Conéctate con mentes afines, comparte tus conocimientos, y descubre las últimas tendencias en un entorno donde la tecnología es la protagonista. Inicia sesión y únete a la conversación. Juntos, vamos a explorar el futuro."</p>
            </div>
            <div className={style.container_form}>
                <form action="" className={style.formulario}>
                    <img src={logoName} alt="logo-name-sbotnet" />
                    <p className={style.text_form}>crea tu cuenta en SbotNet es rapido y facil</p>
                    <input type="email" name='email' placeholder='Correo electronico'/>
                    <input type="text" name='text' placeholder='Nombre de usuario'/>
                    <input type="password" name='password' placeholder='Contraseña'/>
                    <div className={style.container_span}>
                        <span className={style.span_text1}>Ya tienes cuenta? </span>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                        <span className={style.span_text2}>iniciar sesion</span>
                        </Link>
                    </div>
                    <hr className={style.line}/>
                    <button className={style.button_register}>Crear cuenta</button>
                </form>
            </div>
        </div>
        <div className={style.container_copyright}>
            <p>© 2023 Sbotnet. Todos los derechos reservados.</p>
        </div>
        </div>
    )
}