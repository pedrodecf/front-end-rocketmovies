import { Container, Info, Resume } from "./styles"
import { MdArrowBackIos, MdAccessTime, MdDeleteForever } from "react-icons/md"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { RatingReview } from "../../components/RatingReview"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import placeholderavatar from "../../assets/avatarplaceholder.svg"

export function View() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const params = useParams()
  const [data, setData] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderavatar

  async function handleRemoveMovie() {
    const confirm = window.confirm("Deseja excluir este filme?")

    if (confirm) {
      await api.delete(`/movie/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/movie/${params.id}`)
      setData(response.data)
    }
    fetchMovieNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <div className="data">
          <Info>
            <div className="view-buttons">
              <ButtonText
                onClick={() => navigate(-1)}
                title="Voltar"
                icon={<MdArrowBackIos />}
              />
              <ButtonText
                onClick={handleRemoveMovie}
                title="Excluir"
                icon={<MdDeleteForever />}
              />
            </div>
            <div className="movie-details">
              <h2>{data.title}</h2>
              <RatingReview
                data={{
                  rating: `${data.rating}`,
                }}
              />
            </div>
            <div className="user-details">
              <img src={avatarUrl} alt={user.name} />
              <p>{user.name}</p>
              <MdAccessTime />
              <p>{data.created_at}</p>
            </div>
            <div className="tags">
              {data.movie_tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          </Info>
          <main>
            <Resume>
              <p>{data.description}</p>
            </Resume>
          </main>
        </div>
      )}

      <Footer />
    </Container>
  )
}
