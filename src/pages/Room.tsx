import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'
import { database } from '../Services/firebase'

import '../styles/room.scss'

type RoomParams = {
    id: string
}

export function Room() {
    const { user } = useAuth()
    const params = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState('')

    const roomId = params.id

    async function handleSendQuestion(event: FormEvent){
        event.preventDefault()

        if(newQuestion.trim() === ''){
            return
        }

        if(!user){
            throw new Error('You must be logged in')
        }

        const question = {
            constent: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question)

        setNewQuestion('')
    }

    return (
        <div className="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>

            <main>
                <form onSubmit={handleSendQuestion}>
                    <div className="room-title">
                        <h1>Sala React</h1>
                        <span>4 perguntas</span>
                    </div>
                    <textarea placeholder="O que você quer perguntar?" 
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div className="form-footer">
                        { user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <div><span>Se quiser enviar uma pergunta, </span><button className="button-logar">click para logar</button></div>
                        )}
                    </div>
                    <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                </form>
            </main>
        </div>
    )
}