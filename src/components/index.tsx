import { lazy } from "react";

import Cursor from "./Cursor";
import Poster from "./Poster";
import Crawl from "./Crawl";
const Header = lazy(async () => await import("./Header"));
const StarsBackground = lazy(async () => await import("./StarsBackground"));
const StarWarIntro = lazy(async () => await import("./StarWarsIntro"));
const Loading = lazy(async () => await import("./Loading"));

export {
  Cursor,
  Poster,
  Crawl,
  Loading,
  Header,
  StarsBackground,
  StarWarIntro,
};
