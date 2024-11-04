import React from "react";
import styled from "styled-components";

interface ImageCardProps {
  src: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title }) => {
  return (
    <Card>
      <Image src={src} alt={title} />
      <Title>{title}</Title>
    </Card>
  );
};

export default ImageCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  text-align: center;
  margin: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const Title = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
`;
