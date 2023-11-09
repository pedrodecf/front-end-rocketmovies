import { Container } from "./styles"
import { FiX, FiPlus } from "react-icons/fi"


export function Marker({ $isnew, value, onClick, ...rest }) {
  return (
    <Container $isnew={$isnew}>
      <input size="fit-content" type="text" value={value} readOnly={!$isnew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={$isnew ? "button-add" : "button-delete"}
      >
        {$isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
