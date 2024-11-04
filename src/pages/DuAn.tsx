import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import styled from "styled-components";

const DuAn = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>Sản Phẩm Dịch Vụ</Title>
        </TitleWrapper>
        <ImageGrid />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default DuAn;

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: hsl(144, 84%, 31%);
  padding-top: 20px;
`;
