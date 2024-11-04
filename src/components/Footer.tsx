import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <LeftP>© Copyright 2024. All rights reserved</LeftP>
      <RightP>Công ty cổ phần xây dựng Hà Phát</RightP>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: hsl(0, 0%, 98%);
  font-size: 1.25rem;
  margin-top: 50px;
`;

const LeftP = styled.p``;

const RightP = styled.p``;
