import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const PosterContainer = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  width: 300px;
  height: 420px;
  object-fit: contain;
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);

  ${PosterContainer}:hover & {
    opacity: 1;
  }
`;
