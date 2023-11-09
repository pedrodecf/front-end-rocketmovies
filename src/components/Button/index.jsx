import { Container } from "./styles"

export function Button({ title, icon, $delete }) {
  return (
    <Container type="button" $delete={$delete}>
      {icon}
      {title}
    </Container>
  )
}
