import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import image from "../../public/assets/tuyen dung nhan su.png";

const NhanSu = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>Tuyển Dụng Nhân Sự</Title>
        </TitleWrapper>
        <ImageWrapper>
          <StyledImage src={image} />
        </ImageWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default NhanSu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    padding: 0 50px;
  }
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: hsl(144, 84%, 31%);
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 20px;
`;

const StyledImage = styled.img`
  width: 800px;
`;
