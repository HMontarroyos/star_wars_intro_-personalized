import React, { useContext } from "react";
import * as S from "./styled";
import FilmContext from "../../global/context";
import { PostersStarWarsFilms } from "../../global/const";
import { Loading, Poster } from "../../components";

const Home: React.FC = () => {
  const { films } = useContext(FilmContext);

  const getImagePoster = (title: string) => {
    const keys = Object.keys(PostersStarWarsFilms);

    const formattedTitle = title.replace(/\s+/g, "");

    for (const key of keys) {
      const formattedKey = key.replace(/\s+/g, "");

      if (formattedTitle.toLowerCase().includes(formattedKey.toLowerCase())) {
        return PostersStarWarsFilms[key];
      }
    }

    return PostersStarWarsFilms.No_Image;
  };

  return (
    <>
      {films ? (
        <S.ContainerPosters>
          {films.map((film: any) => (
            <S.LinkRedirect to={`/film/7`}>
              <Poster
                image={
                  "https://s2.glbimg.com/xIK2tpANlRYKSIIrUYEnndmeW4s=/smart/e.glbimg.com/og/ed/f/original/2015/11/17/darth-vader-star-wars.jpg"
                }
                description={film.title}
              />
            </S.LinkRedirect>
          ))}
        </S.ContainerPosters>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
