import logoName from '../../assets/sbotnetxt.png'
import logo from '../../assets/sbotnet-izq.png'
import style from '../Register/Register.module.css'

export default function Register(){
    return(
        <div className={style.container_register}>
        <div className={style.container_presentation}>
            <div>
                <img src={logo} alt="logo-sbotnet" />
                <p className={style}>"¡Bienvenido a nuestra comunidad tecnológica! En nuestro mundo digital, la innovación y la pasión por la tecnología se encuentran en cada rincón. Conéctate con mentes afines, comparte tus conocimientos, y descubre las últimas tendencias en un entorno donde la tecnología es la protagonista. Inicia sesión y únete a la conversación. Juntos, vamos a explorar el futuro."</p>
            </div>
            <div>
                <form action="">
                    <img src={logoName} alt="logo-name-sbotnet" />
                    <p>crea tu cuenta en SbotNet es rapido y facil</p>
                    <input type="email" name='email' placeholder='Correo electronico'/>
                    <input type="text" name='text' placeholder='Nombre de usuario'/>
                    <input type="password" name='password' placeholder='Contraseña'/>
                    <p>Ya tienes cuenta?</p>
                    <p>iniciar sesion</p>
                    <button>Crear cuenta</button>
                </form>
            </div>
        </div>
        <div className={style.container_copyright}>
            <p>© 2023 Sbotnet. Todos los derechos reservados.</p>
        </div>
        </div>
    )
}






{/* <Link to="me">My Profile</Link> */}