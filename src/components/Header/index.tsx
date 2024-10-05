import * as S from "./styled";
import { logo } from "../../assets/images";

function Header(): JSX.Element {
  return (
    <S.Container>
      <S.LinkRedirect to={"/"} id={"hoverable"}>
        <S.Logo src={logo} />
      </S.LinkRedirect>
    </S.Container>
  );
}

export default Header;
