import styled from "styled-components";
import imageData from "../data/imageData";
import ImageCard from "./ui/ImageCard";

interface ImageGridProps {
  limit?: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ limit }) => {
  const displayedImages = limit ? imageData.slice(0, limit) : imageData;

  return (
    <Wrapper>
      <CardContainer>
        {displayedImages.map((imageData) => (
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
