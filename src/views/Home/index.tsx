import React, { useContext } from "react";
import * as S from "./styled";
import FilmContext from "../../global/context";
import { PostersStarWarsFilms } from "../../global/const";
import { Loading, Poster } from "../../components";
import  capa  from "../../assets/images/capa.png";

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
            <S.LinkRedirect to={`/film/4`}>
              <Poster image={capa} description={film.title} />
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
