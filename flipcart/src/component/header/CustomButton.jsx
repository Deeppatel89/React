import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';





const Buttoncontainer = styled(Box)`
display: flex;
align-items: center;

& > button{
    height: 32px;
    margin-right: 40px;
    border-radius: 2px;
    text-transform:none;
    color: rgb(45, 115, 228);
    background-color: white;
    padding:5px 40px;
    box-shadow: none;
    cursor: pointer;
   

 
}

` ;
const Subheading = styled(Typography)`
margin-right:30px;
font-size: 14px;
cursor: pointer;

`

const CustomButton = () => {

  const [open, setopen] = useState(false);
  // const {account} = useContext(DataContaxt);

  const openDialog = () => {
    setopen(true);
  }

  return (
    <Buttoncontainer>
      <Button variant="contained" onClick={() => openDialog()}>Login</Button>
      <Subheading>Become a seller</Subheading>
      <Subheading>More</Subheading>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <ShoppingCart sx={{
          marginRight: 1,
          cursor: "pointer",
          fontSize: 15
        }} />
        <Typography style={{ fontSize: 14, cursor: "pointer" }}>Cart</Typography>
      </Box>
      <LoginDialog open={open} setopen={setopen} />
    </Buttoncontainer>

  )
}

export default CustomButton