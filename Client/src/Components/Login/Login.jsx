import style from './Login.module.css'
import TI from '../../assets/image1-login.jpeg'
import logo from '../../assets/sbotnetxt.png'

export default function Login(){
    return(
        <div className={style.container_login}>
            <div className={style.container_presentation}>
                <div className={style.container_description}>
                    <img src={TI} alt="image_tecnologia" />
                    <p>"En un mundo cada vez más conectado, los robots y los humanos están descubriendo nuevas formas de colaboración. Juntos, creamos un futuro donde la tecnología y la humanidad se fusionan para alcanzar un potencial ilimitado. La inteligencia artificial y la intuición humana trabajan en armonía, inspirándonos a innovar y prosperar como nunca antes. Esta simbiosis entre la máquina y el espíritu humano nos lleva hacia un horizonte de posibilidades inexploradas y un mundo en constante evolución."</p>
                </div>
                <div className={style.container_form}>
                    <form action="">
                        <img src={logo} alt="logo-sbotnet" />
                        <p className={style.text_form}>Bienvenido de nuevo por favor inicia sesion para acceder a tu cuenta</p>
                        <input type="text" placeholder="Correo electronico"/>
                        <input type="password" placeholder="Contraseña"/>
                        <p className={style.olvided_password}>Olvidaste tu contraseña? </p>
                        <hr />
                        <br />
                        <button className={style.login}>Iniciar Sesion</button>
                    </form>
                </div>
            </div>
            <div className={style.container_copyright}>
                <p>© 2023 Sbotnet. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}