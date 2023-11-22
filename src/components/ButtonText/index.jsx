import { Container } from "./styles"

export function ButtonText({ $logout, title, icon, onClick, ...rest }) {
  return (
    <Container type="button" onClick={onClick} $logout={$logout} {...rest}>
      {icon}
      {title}
    </Container>
  )
}
