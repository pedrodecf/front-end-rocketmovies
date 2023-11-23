import { Container } from "./styles"
import { Tag } from "../Tag"
import { Rating } from "../../components/Rating"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="rating-stars">
        {Array.from({ length: data.rating }, (_, i) => (
          <Rating $star key={i} />
        ))}
        {Array.from({ length: 5 - data.rating }, (_, i) => (
          <Rating key={i + data.rating} />
        ))}
      </div>
      <p>{data.description}</p>

      {data.movie_tags && (
        <footer>
          {data.movie_tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
