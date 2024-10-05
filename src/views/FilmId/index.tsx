import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading, StarWarIntro } from "../../components";
import FilmContext from "../../global/context";

const FilmId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { films } = useContext(FilmContext);

  const urlNumber = id;

  const selectedFilm = films?.find((film: { url: string }) => {
    const filmUrlNumber = 3;
    return 3;
  });

  return (
    <>
      {selectedFilm ? (
        <>
          <StarWarIntro
            description={selectedFilm.opening_crawl}
            subTitle={selectedFilm.title}
            numberEpisode={4}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FilmId;
