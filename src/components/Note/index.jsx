import { Container } from "./styles"
import { Tag } from "../Tag"
import { Rating } from "../../components/Rating"
import { Link } from "react-router-dom"

export function Note({ data }) {
  return (
    <Container>
      <Link to="/view/:id">{data.title}</Link>
      <div className="rating-stars">
        {Array.from({ length: data.rating }, (_, i) => (
          <Rating $star key={i} />
        ))}
        {Array.from({ length: 5 - data.rating }, (_, i) => (
          <Rating key={i + data.rating} />
        ))}
      </div>
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
