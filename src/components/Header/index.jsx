import { Container, Logo, Search, User } from "./styles"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Logo>
        <Link to="/">RocketMovies</Link>
      </Logo>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <User>
        <div>
          <Link to="/profile">
            <h3>Pedro Freitas</h3>
          </Link>
          <ButtonText title="Sair" $logout onClick={signOut} />
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/pedrodecf.png"
            alt="Foto de perfil do usuário."
          />
        </Link>
      </User>
    </Container>
  )
}
