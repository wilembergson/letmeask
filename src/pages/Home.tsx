import InlustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImage from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={InlustrationImg} alt="Inlustração simbolizando perguntas e respostas."/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImage} alt='Logo do google' />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <button type="submit">Entrar em uma sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}