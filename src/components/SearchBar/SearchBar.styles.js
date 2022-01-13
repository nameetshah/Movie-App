import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;
  align-items: center;
  height: 66px;
  background: var(--darkGrey);
  padding: 0 20px;
  margin-top: 300px;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 40px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  img {
    position: absolute;
    left: 15px;
    top: 8px;
    width: 25px;
  }
  
  input {
    font-size: 23px;
    position: absolute;
    left: -5px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 24px;
    color: var(--white);
    
    :focus {
      outline: none;
    }
  }
`;