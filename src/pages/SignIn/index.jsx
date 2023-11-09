import { Container, Form, Background } from "./styles"
import { GoMail, GoLock } from "react-icons/go"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input icon={<GoMail />} placeholder="E-mail" />
        <Input icon={<GoLock />} placeholder="Senha" />
        <Button title="Entrar" />
        <Link to="/register">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
