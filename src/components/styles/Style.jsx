import styled from "styled-components";

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25%);
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  & {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 3px 20px 18px rgba(0, 0, 0, 0.03);
    display: grid;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    background-color: #f5f5f5;
    margin: 20px 0;
    transition: transform .5s;
  }
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardId = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
const CardTitle = styled.div`
  width: 70%;
`;
const CardFlex = styled.div`
  display: flex;
  gap: 5px;
`;
const CardImg = styled.img`
  margin: 0 auto;
`;

const CardText = styled.div`
  text-align: left;
  margin: 0 0 0 20px;
`;
export {
  CardStyle,
  CardWrapper,
  CardId,
  CardTitle,
  CardFlex,
  CardImg,
  CardText,
};
