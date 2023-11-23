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
import { useState } from "react"
import { api } from "../../services/api"

export function New() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  console.log(tags)

  function removeNewMovie() {
    if (confirm("Tem certeza que deseja excluir esse filme?") == true) {
      navigate("/")
    }
  }

  async function addNewMovie() {
    if (!title) {
      return alert("Adicione o título do filme.")
    }

    if (!rating) {
      return alert("Adicione uma nota (de 0 a 5) ao filme.")
    }

    if (!description) {
      return alert("Adicione uma observação sobre o filme.")
    }

    if (tags.length === 0) {
      return alert("Adicione ao menos um marcador ao filme.")
    }

    await api.post("/movie", {
      title,
      rating,
      description,
      movie_tags: tags,
    })

    alert("Filme cadastrado com sucesso")
    navigate("/")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

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
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              min="0"
              max="5"
              stack="1"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            type="text"
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Info>

        <TagsContainer>
          <h3>Marcadores</h3>
          <div>
            {tags.map((tag, index) => (
              <Marker
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <Marker
              placeholder="Novo marcador"
              $isnew
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
        </TagsContainer>

        <ButtonsContainer>
          <Button title="Excluir filme" $delete onClick={removeNewMovie} />
          <Button title="Salvar alterações" onClick={addNewMovie} />
        </ButtonsContainer>

        <Footer />
      </main>
    </Container>
  )
}
