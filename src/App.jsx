import { Box } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useState } from 'react';


export const App = () => {
  const [text, setText] = useState("あやや");
  const onClickChangeText = () => {
    const results = ["大吉", "小吉", "凶"]
    const n = Math.floor(Math.random() * 3);
    setText(results[n]);
  }
  const StyledButton = styled(Button)`
    color: #fff;    
    border-radius: 50%;
    width: 150px;
    height: 150px;
    font-size: 25px;
  `

  return (
    <>
      <Box textAlign="center">
        <StyledButton variant="contained" color="secondary" onClick={onClickChangeText}>{text}</StyledButton>      
      </Box>      
    </>
  )
}