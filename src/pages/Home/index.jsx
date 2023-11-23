import { Container, Description, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { Footer } from "../../components/Footer"
import { TfiPlus } from "react-icons/tfi"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export function Home() {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  function handleViewMovie(id){
    navigate(`/view/${id}`)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie?title=${search}`)
      setMovies(response.data)
    }
    fetchMovie()
  }, [search])


  return (
    <Container>
      <Header setSearch={setSearch} />
      <Description>
        <h2>Meus filmes</h2>
        <Link to="/new">
          <Button icon={<TfiPlus />} title="Adicionar filme" />
        </Link>
      </Description>
      <main>
        <Content>
          {movies.map((movie) => (
            <Note
              key={String(movie.id)}
              data={movie}
              onClick={() => handleViewMovie(movie.id)}
            />
          ))}
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
