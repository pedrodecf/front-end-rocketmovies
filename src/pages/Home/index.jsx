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

  function handleViewMovie(id){
    navigate(`/movie/${id}`)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get("/movie?title&movie_tags")
      setMovies(response.data)
      console.log(response.data)
    }
    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />
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
