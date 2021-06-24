import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import '../styles/room.scss'

type RoomParams = {
    id: string
}

export function Room() {
    const params = useParams<RoomParams>()

    return (
        <div className="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id}/>
                </div>
            </header>

            <main>
                <form>
                    <div className="room-title">
                        <h1>Sala React</h1>
                        <span>4 perguntas</span>
                    </div>
                    <textarea placeholder="O que você quer perguntar?" />

                    <div className="form-footer">
                        <span>Se quiser enviar uma pergunta, </span><button className="button-logar">click para logar</button>
                    </div>
                    <Button type="submit">Enviar pergunta</Button>
                </form>
            </main>
        </div>
    )
}