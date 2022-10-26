import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  CardFlex,
  CardId,
  CardImg,
  CardStyle,
  CardText,
  CardTitle,
  CardWrapper,
} from "../styles/Style";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      setData(await response.data);
    };
    getData();
  }, []);

  return (
    <CardStyle>
      {data.map((photo) => (
        <CardWrapper key={photo.id}>
          <CardFlex>
            <CardTitle>{photo.title}</CardTitle>
            <CardId>{photo.id}</CardId>
          </CardFlex>
          <CardText>text</CardText>
          <CardImg src={photo.thumbnailUrl} alt="img" />
        </CardWrapper>
      ))}
    </CardStyle>
  );
};

export default Card;
