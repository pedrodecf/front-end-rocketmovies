import { Container } from "./styles"

export function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon}
      <input {...rest} />
    </Container>
  )
}
