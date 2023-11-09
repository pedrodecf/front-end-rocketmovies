import { Container } from "./styles";
import { Rating } from "../Rating";


export function RatingReview({ data }){
    return (
      <Container>
        {Array.from({ length: data.rating }, (_, i) => (
          <Rating $star key={i} />
        ))}
        {Array.from({ length: 5 - data.rating }, (_, i) => (
          <Rating key={i + data.rating} />
        ))}
      </Container>
    )
}