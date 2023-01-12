import React from "react";

import "./Card.css";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Card = (props) => {
  const classes = "card " + props.className;
  // return <div className={classes}>{props.children}</div>;
  return <StyledCard className={classes}>{props.children}</StyledCard>;
};

export default Card;
