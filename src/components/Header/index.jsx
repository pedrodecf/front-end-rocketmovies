import { Container, Logo, Search, User } from "./styles"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function Header() {
  const { signOut, user } = useAuth()
    const avatarUrl = user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : placeholderavatar
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
            <h3>{user.name}</h3>
          </Link>
          <ButtonText title="Sair" $logout onClick={signOut} />
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </User>
    </Container>
  )
}
