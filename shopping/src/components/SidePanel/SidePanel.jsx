import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SidePanel(props) {
    const toggleDrawer = (newOpen) => () => {
        props.setOpenSide(newOpen);
    };

    const [isSubMenu, setSubMenu] = useState(null);
    const [isInnerSubMenu, setInnerSubMenu] = useState(null);

    const openSubMenu = (index) => {
        setSubMenu(isSubMenu === index ? null : index);
    };

    const openInnerSubMenu = (index) => {
        setInnerSubMenu(isInnerSubMenu === index ? null : index);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                bgcolor: '#0D1117',
                color: 'white',
                overflowY: 'auto',
            }}
            role="presentation"
        >

        </Box>
    );

    return (
        <div>
            <Drawer
                anchor="left"
                open={props.isOpenSide}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: '#0D1117',
                        color: 'white',
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default SidePanel;
