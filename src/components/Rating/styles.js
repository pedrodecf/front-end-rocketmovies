import styled from "styled-components"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: -0.5rem 0;
  gap: 0.2rem;
`

export const FullStar = styled(IoIosStar)`
  width: 1.6rem;
  height: 1.6rem;
  color: var(--primary);
`
export const EmptyStar = styled(IoIosStarOutline)`
  width: 1.6rem;
  height: 1.6rem;
  color: var(--primary);
`
