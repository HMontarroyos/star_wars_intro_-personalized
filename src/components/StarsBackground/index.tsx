import * as S from "./styled";

const StarsBackground = () => {
  const starsCount = 200;

  const stars = Array.from({ length: starsCount }, (_, index) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 10;

    return (
      <S.Star
        key={index}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <S.Background>{stars}</S.Background>;
};

export default StarsBackground;
