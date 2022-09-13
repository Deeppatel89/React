import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Search from './Search';
import CustomButton from './CustomButton';

const Navbar = styled(AppBar)`
height:55px;
background:#2874f0;
`;
const Component = styled(Box)`
margin-left: 12%;
line-height:0;
`;
const Subheading = styled(Typography)`
font-size : 10px;
font-style : italic;
`;
const Plusimg = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4

})
const Loginbutton = styled(Box)`
margin:0 5% 0 auto;
`

const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <Navbar>
      <Toolbar style={{ minHeight: "55px" }}>
        <Component >
          <img src={logoURL} alt="" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>Explore <Box component="span" style={{ color: "yellow" }}>Plus</Box></Subheading>
            <Plusimg src={subURL} alt="" />
          </Box>
        </Component>
        <Search />
        <Loginbutton>
          <CustomButton />
        </Loginbutton>
      </Toolbar>
    </Navbar>
  )
}
// sx={{height:"55px", background:"#2874f0"}}

export default Header