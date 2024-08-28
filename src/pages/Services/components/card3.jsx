import React, { useState } from "react";
import { Card, Box, Typography, Button, CardContent } from "@mui/material";
import Styled from "@emotion/styled";
import {rev} from "./images.js";
import before from "../photos/before.png";
import after from "../photos/after.png";
import "./cards.css";
const StyledContent = Styled(CardContent)({
  marginTop: "2vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1vw",
  gap:"5%"
});
const StyledText = Styled(Typography)({
  fontWeight: "bolder",
  fontSize: "5.75vw",
  display: "inline",
  textOverflow: "ellipsis",
  paddingBlock: "6vw",
});
const StyledSub = Styled(Typography)({
  fontSize: "1.5vw",
  paddingInline: "10vw",
});
const TextBox = Styled(Box)({ margin: "15px" });
const StyledBox = Styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"3%",
  justifyContent:"center"
});
function Card3() {
  const [index, SetIndex] = useState(1);
  const images = rev.map((store) => store.image);
  const Rclicked = () => {
    SetIndex((index + 1) % images.length);
  };

  const clicked = () => {
    SetIndex((index + images.length - 1) % images.length);
  };
  return (
    <Box>
      <Card>
        <div>
          <CardContent sx={{ textAlign: "center" }}>
          <TextBox>
              <StyledText variant="h3">
                Revêtement { }
                </StyledText>
                <StyledText variant="h3" sx={{ color: "#57C9EA" }}>
                De {" "}
                </StyledText>
                <StyledText>
                 Façade{" "}
              </StyledText>
              <StyledText variant="h3" sx={{ color: "#57C9EA" }}>
                  & {" "}
                </StyledText>
                <StyledText>
                  Eseigne
              </StyledText>
              <br />
            </TextBox>
            <StyledSub sx={{ marginBottom: "20px" }} variant="subtitle1">
            Notre service de revêtement de façade et d'enseigne métamorphose vos bâtiments en véritables emblèmes. Avec une expertise pointue, nous redéfinissons l'apparence de vos espaces commerciaux, créant des enseignes accrocheuses et des revêtements de façade distinctifs qui laissent une impression durable.
            </StyledSub>

            <StyledContent>
              <Button onClick={clicked} variant="contianed">
                <img className="buttons left" src={before} />
              </Button>
              <StyledBox>
                <Box className="box">
                  <img
                    className="image1"
                    src={images[(index + images.length - 1) % images.length]}
                  />
                </Box>
                <Box>
                  <img className="image2" src={images[index]} alt="img2" />
                </Box>
                <Box className="box">
                  <img
                    className="image3"
                    src={images[(index + 1) % images.length]}
                    alt="img3"
                  />
                </Box>
              </StyledBox>
              <Button onClick={Rclicked} variant="contianed">
                <img className="buttons right" src={after} />
              </Button>
            </StyledContent>
          </CardContent>
        </div>
      </Card>{" "}
    </Box>
  );
}

export default Card3;
