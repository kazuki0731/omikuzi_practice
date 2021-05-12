import { Box } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useState } from 'react';


export const App = () => {
  const [text, setText] = useState("押してね");
  const onClickChangeText = () => {
    const arr = ["大吉", "小吉", "凶"]
    const t = Math.floor(Math.random() * 3);
    setText(arr[t]);
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