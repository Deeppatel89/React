import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../../redux/features/Postslice'
import Slide from './Slide'

import Banner from './Banner'
import NavBar from './NavBar'

const Component = styled(Box)`
`

const Home = () => {
  const{ posts,loading } = useSelector((state)=> state.post);

// console.log(posts);
// console.log(loading);

   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts());    
  },[dispatch])

 
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <Slide posts = {posts}/>
      </Component>
    </>
  )
}

export default Home
