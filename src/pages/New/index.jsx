import {
  Container,
  Info,
  Title,
  TagsContainer,
  ButtonsContainer,
} from "./styles"
import { MdArrowBackIos } from "react-icons/md"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Marker } from "../../components/Marker"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { useNavigate } from "react-router-dom"

export function New() {
  const navigate = useNavigate()
  return (
    <Container>
      <Header />
      <main>
        <Title>
          <ButtonText
            onClick={() => navigate(-1)}
            title="Voltar"
            icon={<MdArrowBackIos />}
          />
          <h2>Novo filme</h2>
        </Title>
        <Info>
          <div>
            <Input placeholder="Título" />
            <Input
              type="number"
              min="0"
              max="5"
              stack="1"
              placeholder="Sua nota (de 0 a 5)"
            />
          </div>
          <Textarea placeholder="Observações" />
        </Info>

        <TagsContainer>
          <h3>Marcadores</h3>
          <div>
            <Marker value="Drama" />
            <Marker placeholder="Novo marcador" $isnew />
          </div>
        </TagsContainer>

        <ButtonsContainer>
          <Button title="Excluir filme" $delete />
          <Button title="Salvar alterações" />
        </ButtonsContainer>

        <Footer />
      </main>
    </Container>
  )
}
