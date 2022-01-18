import styled from "styled-components";

export const Div = styled.div`
  opacity: 0;
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  height: 270px;
  margin-top: -291px;
  background: black   ;


  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    height: 231px;
    margin-top: -252px;
  }

`;

export const Image = styled.img`
  opacity: 1;
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  text-decoration: none;
  color: inherit;


  :hover {
    opacity: 1;
    
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;