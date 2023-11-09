import { Container } from "./styles"
import { GiTechnoHeart } from "react-icons/gi"

export function Footer() {
  return (
    <Container>
        <p>
          Feito com <GiTechnoHeart /> por{" "}
          <a href="https://github.com/pedrodecf" target="_blank">
            pedrodecf
          </a>
        </p>
    </Container>
  )
}
