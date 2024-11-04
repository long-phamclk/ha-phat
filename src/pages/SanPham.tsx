import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const SanPham = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>Sản Phẩm Dịch Vụ</Title>
        </TitleWrapper>
        <Headline>Bê Tông</Headline>
        <ul>
          <StyledLi>
            Bê tông thương phẩm có cường độ kháng nén từ 10 MPa đến 60 MPa cho
            các cấp độ sụt. Từ 40 MPa đến 70 MPa cho các cấp độ xòe.
          </StyledLi>
          <StyledLi>Bê tông tự đầm.</StyledLi>
          <StyledLi>Bê tông chống thấm các cấp.</StyledLi>
          <StyledLi>
            Bê tông ít tỏa nhiệt bê tông đầm lăn, bê tông khối lớn.
          </StyledLi>
          <StyledLi>
            Bê tông chống ăn mòn. Và các chủng loại bê tông đặc biệt.
          </StyledLi>
        </ul>
        <Headline>Bơm - Vận Chuyển Bê Tông</Headline>
        <ul>
          <StyledLi>
            Bơm vận chuyển bê tông cho các công trình gồm các thiết bị: Bơm cần,
            bơm cố định các loại.
          </StyledLi>
          <StyledLi>
            Vận chuyển bê tông thương phẩm cho các công trình.
          </StyledLi>
        </ul>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default SanPham;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 120px;
`;

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

const Headline = styled.h2`
  margin: 20px 0px 10px;
  font-weight: 500;
`;

const StyledLi = styled.li`
  font-size: 1.1rem;
`;
