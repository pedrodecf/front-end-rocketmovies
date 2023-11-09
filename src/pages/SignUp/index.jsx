import { Container, Form, Background } from "./styles"
import { GoMail, GoLock, GoPerson } from "react-icons/go"
import { MdArrowBackIos } from "react-icons/md"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input icon={<GoPerson />} placeholder="Nome" />
        <Input icon={<GoMail />} placeholder="E-mail" />
        <Input icon={<GoLock />} placeholder="Senha" />
        <Button title="Cadastrar" />
        <Link to="/login">
          <ButtonText icon={<MdArrowBackIos />} title="Voltar para o login" />
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
