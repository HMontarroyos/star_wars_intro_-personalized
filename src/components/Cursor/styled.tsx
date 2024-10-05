import styled from "styled-components";
import { cursor, cursorPointer } from "../../assets/images";

interface Props {
  hover?: boolean;
}

export const Cursor = styled.div<Props>`
  position: fixed;
  pointer-events: none;
  width: 80px;
  height: 60px;
  background-image: ${(props) =>
    props.hover ? `url(${cursorPointer})` : `url(${cursor})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.1s linear;
  z-index: 9999;
  transform: translate(-80%, -80%) rotate(-30deg);
  cursor: none;

  &:hover {
    background-image: url(${cursorPointer});
  }

  @media (max-width: 768px) {
    background-image: none;
  }
`;
