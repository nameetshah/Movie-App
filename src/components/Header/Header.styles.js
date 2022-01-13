import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 101;
  box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 120px;
  
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;