import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { MdArrowBackIos } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const navigate = useNavigate()
  return (
    <Container>
      <header>
        <ButtonText
          onClick={() => navigate(-1)}
          title="Voltar"
          icon={<MdArrowBackIos />}
        />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/pedrodecf.png"
            alt="Foto de perfil do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <p>Informações pessoais:</p>
        <Input placeholder="Nome" type="text" icon={<FiUser />} />

        <Input placeholder="E-mail" type="text" icon={<FiMail />} />

        <Input placeholder="Senha atual" type="password" icon={<FiLock />} />

        <Input placeholder="Nova senha" type="password" icon={<FiLock />} />

        <Button title="Salvar" />
      </Form>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
