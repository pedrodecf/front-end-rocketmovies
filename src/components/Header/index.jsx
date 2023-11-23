import { Container, Logo, Search, User } from "./styles"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import placeholderavatar from "../../assets/avatarplaceholder.svg"

export function Header(props) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  const handleInputChange = (e) => {
    try {
      props.setSearch(e.target.value)
    } catch (error) {
      return
    }
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderavatar
  return (
    <Container>
      <Logo>
        <Link to="/">RocketMovies</Link>
      </Logo>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={handleInputChange}
        />
      </Search>

      <User>
        <div>
          <Link to="/profile">
            <h3>{user.name}</h3>
          </Link>
          <ButtonText title="Sair" $logout onClick={handleSignOut} />
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </User>
    </Container>
  )
}
