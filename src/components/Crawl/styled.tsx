import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Fade = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  z-index: 1;
`;

export const TextContainer = styled.div`
  padding: 20px;
  margin: 20px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  transform: perspective(300px) rotateX(20deg);
  text-align: center;
`;

const CrawlAnimation = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

export const CrawlText = styled.div`
  width: 100%;
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: ${CrawlAnimation} 90s linear;
`;
