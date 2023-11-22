import { Container } from "./styles"

export function Button({ title, icon, $delete, ...rest }) {
  return (
    <Container type="button" $delete={$delete} {...rest}>
      {icon}
      {title}
    </Container>
  )
}
