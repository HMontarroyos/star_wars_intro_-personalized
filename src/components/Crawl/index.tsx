import React from "react";
import * as S from "./styled";

interface CrawlProps {
  title: string;
  subTitle: string;
  paragraphs: string[];
}

const Crawl = ({ title, subTitle, paragraphs }: CrawlProps) => {
  return (
    <S.Container>
      <S.Fade />
      <S.TextContainer>
        <S.CrawlText>
          <p>{title}</p>
          <p>{subTitle.toUpperCase()}</p>
          <br />
          {paragraphs.map((text, idx) => (
            <React.Fragment key={idx}>
              <p>{text}</p>
              <br />
            </React.Fragment>
          ))}
        </S.CrawlText>
      </S.TextContainer>
    </S.Container>
  );
};

export default Crawl;
