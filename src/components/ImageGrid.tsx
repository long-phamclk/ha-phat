import styled from "styled-components";
import imageData from "../data/imageData";
import ImageCard from "./ui/ImageCard";

const ImageGrid = () => {
  return (
    <Wrapper>
      <CardContainer>
        {imageData.map((imageData) => (
          <ImageCard
            key={imageData.id}
            src={imageData.src}
            title={imageData.title}
          />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default ImageGrid;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
