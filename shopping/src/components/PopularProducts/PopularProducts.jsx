import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function PopularProducts(props) {
    const [value, setValue] = React.useState(0);
    const categories = [
        "Fashion",
        "Electronics",
        "Beauty",
        "Books",
        "Groceries",
        "Home",
    ];
    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setCategory(categories[newValue]);
    };


    return (

        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <Tab label="Fashion" />
            <Tab label="Electronics" />
            <Tab label="Beauty" />
            <Tab label="Books" />
            <Tab label="Groceries" />
            <Tab label="Home" />
        </Tabs>
    )
}

export default PopularProducts