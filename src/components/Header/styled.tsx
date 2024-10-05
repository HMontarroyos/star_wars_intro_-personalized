import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;
