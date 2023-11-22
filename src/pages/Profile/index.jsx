import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { MdArrowBackIos } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile({ user })
  }

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
        <Input
          placeholder="Nome"
          type="text"
          icon={<FiUser />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={<FiMail />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={<FiLock />}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={<FiLock />}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
