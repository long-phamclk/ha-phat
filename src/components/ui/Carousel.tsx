import carousel from "../../assets/back-ground.png";
import styled from "styled-components";

const Carousel = () => {
  return (
    <Wrapper>
      <StyledImage src={carousel} alt="Ảnh Nền" />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  height: 625px;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
