import { Container, FullStar, EmptyStar } from "./styles"

export function Rating({ $star }) {
  return (
    <Container $star={$star}>
      {$star ? <FullStar /> : <EmptyStar />}</Container>
  )
}
