import React from 'react'
import { navData } from '../constans/data' 
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Component = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content: space-between;
`;

const Container = styled(Box)`
padding:12px 8px;
text-align: center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight: 600;

`

const NavBar = () => {
  return (
    <Component>
        {
            navData.map((data)=>{
                return(
                    <Container>
                        <img src={data.url} alt="" style={{width:64}} />
                        <Text>{data.text}</Text>
                    </Container>
                )    
            })
        }
    </Component>
  )
}

export default NavBar