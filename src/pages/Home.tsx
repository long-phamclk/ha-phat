import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Header />
      <BodyWrapper>
        <IntroWrapper>
          <StyledH1>GIỚI THIỆU HÀ PHÁT</StyledH1>
          <StyledSection>
            <StyledParagraph>
              Thành lập từ năm 2003 đến nay, CÔNG TY CỔ PHẦN VẬT LIỆU VÀ XÂY
              DỰNG HÀ PHÁT đã có 17 năm trưởng thành và phát triển. Vượt qua
              những khó khăn của những ngày đầu, bằng nỗ lực vươn lên, khẳng
              định bằng uy tín và chất lượng. Hiện nay, CÔNG TY CỔ PHẦN VẬT LIỆU
              VÀ XÂY DỰNG HÀ PHÁT đã trở thành một thương hiệu được nhiều khách
              hàng lớn tin dùng.
            </StyledParagraph>
            <br></br>
            <StyledParagraph>
              Sản phẩm của Công ty đã xuất hiện tại nhiều công trình ở các tỉnh
              thành trên cả nước, phục vụ nhiều công trình lớn, có yêu cầu kỹ
              thuật khắt khe. Với tiêu chí uy tín và chất lượng, CÔNG TY CỔ PHẦN
              VẬT LIỆU VÀ XÂY DƯNG HÀ PHÁT đã chú trọng đầu tư vào nguồn lực.
              Hiện nay, với đội ngũ công nhân viên ký thuật lành nghề, được đào
              tạo cơ bản, có chứng chỉ hành nghề đạt chuẩn, Công ty tự hào luôn
              làm chủ mọi công nghệ và kỹ thuật tiên tiến nhất trong lĩnh vực bê
              tông thương phẩm.
            </StyledParagraph>
          </StyledSection>
        </IntroWrapper>
        <QualityWrapper>
          <StyledH1>CHẤT LƯỢNG DỊCH VỤ</StyledH1>
          <StyledArticleRow>
            <StyledArticle>
              <StyledH3>Dịch vụ chuyên nghiệp</StyledH3>
              <p>
                Với nguồn nhân lực cao, phương tiện máy móc chất lượng, Hà Phát
                luôn sẵn sàng phục vụ quý khách hàng với tính chuyên nghiệp
                nhất.
              </p>
            </StyledArticle>
            <StyledArticle>
              <StyledH3>Quy trình khoa học</StyledH3>
              <p>
                Hà Phát luôn xem đầu tư thí nghiệm để đưa ra sản phẩm tốt nhất
                cho khách hàng là ưu tiên hàng đầu. Với phòng thì nghiệm riêng
                chúng tôi tự hào luôn đưa ra quy trình khoa học nhất cho khách
                hàng
              </p>
            </StyledArticle>
            <StyledArticle>
              <StyledH3>Tiến độ nhanh chóng</StyledH3>
              <p>
                Với phương châm xem thời gian của khách hàng như thời gian của
                chính mình, Hà Phát luôn phục vụ khách hàng nhanh nhất với chất
                lượng tốt nhất hơn cả những gì khách hàng mong muốn
              </p>
            </StyledArticle>
            <StyledArticle>
              <StyledH3>Phục vụ tận tâm</StyledH3>
              <p>
                Lòng tin của khách hàng là sự sống của Hà Phát vì vậy phục vụ
                tốt nhất cho quý khách hàng, làm cho quý khách hàng hài lòng là
                trách nhiệm và vinh hạnh của chúng tôi
              </p>
            </StyledArticle>
          </StyledArticleRow>
        </QualityWrapper>
        <ExamplesWrapper>
          <StyledH1>CÔNG TRÌNH TIÊU BIỂU</StyledH1>
          <ImageGrid limit={6} />
        </ExamplesWrapper>
      </BodyWrapper>
      <Footer />
    </div>
  );
};

export default Home;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const IntroWrapper = styled.div`
  padding: 25px 100px 50px;
`;

const QualityWrapper = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 0px 100px 40px;
  margin-bottom: 20px;
`;

const ExamplesWrapper = styled.div``;

const StyledH1 = styled.h1`
  font-size: 3rem;
  color: hsl(144, 84%, 31%);
  padding: 1.5rem;
`;

const StyledSection = styled.section``;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  text-align: left;
`;

const StyledArticleRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;

  @media (max-width: 768px) {
    display: block; /* Show button on mobile */
  }
`;

const StyledArticle = styled.article`
  width: 250px;
  height: auto;
  background-color: hsl(0, 0%, 94%);

  @media (max-width: 768px) {
    margin: 20px; /* Show button on mobile */
  }
`;

const StyledH3 = styled.h3`
  font-size: 1.3rem;
  padding: 10px 30px;
`;
