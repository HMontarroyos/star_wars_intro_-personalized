import * as S from "./styled";

type PosterProps = {
  image: string;
  imageAlternative?: string;
  description: string;
};

const Poster = ({ image, imageAlternative, description }: PosterProps) => {
  return (
    <S.Container>
      <S.PosterContainer id={"hoverable"}>
        <S.ImageContainer>
          <S.Image src={image} alt={description} />
          {imageAlternative && (
            <S.OverlayImage src={imageAlternative} alt={description} />
          )}
        </S.ImageContainer>
      </S.PosterContainer>
    </S.Container>
  );
};

export default Poster;
