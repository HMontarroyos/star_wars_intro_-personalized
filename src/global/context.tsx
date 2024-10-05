import React, { createContext, useState, useEffect } from "react";
import { getFilms } from "../server";
import { othersFilmsStarWars } from "../global/const";

interface FilmProviderProps {
  children: React.ReactNode;
}

const FilmContext = createContext<any>(undefined);

export const FilmProvider: React.FC<FilmProviderProps> = ({ children }) => {
  const [films, setFilms] = useState<any[] | null>(null);

  useEffect(() => {
    async function fetchFilms(): Promise<void> {
      try {
        const _films = await getFilms();
        const combinedFilms = _films.concat(othersFilmsStarWars);
        setFilms(othersFilmsStarWars);
      } catch (error) {
        console.error(error);
      }
    }

    if (!films) {
      fetchFilms();
    }
  }, [films]);

  return (
    <FilmContext.Provider value={{ films }}>{children}</FilmContext.Provider>
  );
};

export default FilmContext;
