import { InputBase, Box, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
width:38%;
background:#fff;
margin-left:10px;
display:flex;
border-radius: 3px;
`;
const InputSearch = styled(InputBase)`
width:100%;
font-size: unset;

`


const Search = () => {
    return (
        <SearchContainer>
            <InputSearch placeholder="Search for Products,brands and more" inputSizeSmall/>
            <Box>
                <SearchIcon sx={{color:"rgb(45, 115, 228)",padding:"5px",display:"flex"}}/>
            </Box>
        </SearchContainer>
    )
}

export default Search