import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../Services/firebase'

import InlustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImage from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home(){
    const history = useHistory()

    function handleCreateRoom(){
        const provider = new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider).then(result => {
            console.log(result)

            history.push('/rooms/new')
        })
       
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={InlustrationImg} alt="Inlustração simbolizando perguntas e respostas."/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImage} alt='Logo do google' />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">Entrar em uma sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}