import { Box,styled } from "@mui/material";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
// import DataProvider from "./context/DataProvider";


const CustomNav = styled(Box)`
margin-top: 60px;
`


function App() {
  return (
    // <DataProvider >
    <>
      <Header/>
      <CustomNav>
        <Home/>
      </CustomNav>
      </>
  //  </DataProvider>
  );
}

export default App;
