import { lazy } from "react";

const Home = lazy(async () => await import("./Home"));
const FilmId = lazy(async () => await import("./FilmId"));

export { Home, FilmId };
