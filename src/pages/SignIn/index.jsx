import { Container, Form, Background } from "./styles"
import { GoMail, GoLock } from "react-icons/go"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function hadleSignIn() {
    signIn({ email, password })
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input
          icon={<GoMail />}
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={<GoLock />}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={hadleSignIn} />
        <Link to="/register">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
