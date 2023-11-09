import { Container } from "./styles"

export function ButtonText({ $logout, title, icon, onClick }) {
  return (
    <Container type="button" onClick={onClick} $logout={$logout}>
      {icon}
      {title}
    </Container>
  )
}
