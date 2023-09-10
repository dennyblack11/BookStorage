import { styled } from "styled-components";
import img from "../Assets/pix12.png";

const Upload = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImageHold>
            <Image src={img} />
          </ImageHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Upload;
const ImageHold = styled.div`
  background-color: brown;
  width: 200px;
  height: 200px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px 20px 20px 20px;
  background-color: cyan;
`;

const Container = styled.div`
  background-color: grey;
  height: 600px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;