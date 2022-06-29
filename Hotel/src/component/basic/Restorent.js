import React, { useState } from 'react';
// import './Restorent.css';
import MenuApi from './MenuApi';
import Menucard from './Menucard';
import Nav from './Nav';
import './Menucard.css'
const uniquelist = [...new Set(MenuApi.map((curelem) => {
    return curelem.category;
})
)
    , "All"]
// console.log(uniquelist)

const Restorent = () => {
    const [menudata, setmenudata] = useState(MenuApi);
    const [menulist, setmenulist] = useState(uniquelist);
    //  console.log(menudata)

    const filteritem = (category) => {

        if (category === "All") {
            setmenudata(MenuApi);
            return;
        }
        const updatelist = MenuApi.filter((curentelem) => {
            return curentelem.category === category;

        });
        console.log(updatelist)
        setmenudata(updatelist);

    }

    return (
        <>
            <Nav filteritem={filteritem} menulist={menulist} />
            <Menucard menudata={menudata} />
        </>
    )


}

export default Restorent
