'use client'

import { Suspense } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '/styles/variables.scss';
import '/app/i18n';
import { useTranslation, i18n } from 'react-i18next';



export default function MenuAppBar() {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        handleClose();
    };

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const initialOrders = [0, 1, 2, 3, 4, 5];
    const [orders, setOrders] = React.useState(initialOrders);

    // {Random}
    const handleRandomPosition = () => {
        const randomizedOrders = [...orders];
        for (let i = randomizedOrders.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomizedOrders[i], randomizedOrders[j]] = [randomizedOrders[j], randomizedOrders[i]];
        }
        setOrders(randomizedOrders);
    };

    const handleLeft = () => {
        const updatedOrders = [...orders];
        const lastOrder = updatedOrders.pop();
        updatedOrders.unshift(lastOrder);
        setOrders(updatedOrders);
    };

    const handleRight = () => {
        const updatedOrders = [...orders];
        const firstOrder = updatedOrders.shift();
        updatedOrders.push(firstOrder);
        setOrders(updatedOrders);
    };



    const handleTopBot = () => {
        const randomizedOrders = [...orders];
        [randomizedOrders[0], randomizedOrders[3]] = [randomizedOrders[3], randomizedOrders[0]];
        [randomizedOrders[1], randomizedOrders[4]] = [randomizedOrders[4], randomizedOrders[1]];
        [randomizedOrders[2], randomizedOrders[5]] = [randomizedOrders[5], randomizedOrders[2]];
        setOrders(randomizedOrders);
    };


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <h1>{t('การจัดการหน้าเว็บ')}</h1>
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <LanguageIcon />
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleChangeLanguage('th')}>TH</MenuItem>
                                    <MenuItem onClick={() => handleChangeLanguage('en')}>ENG</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>



            {/* {handle} */}
            <div className='flex flex-row grid grid-row-2 mt-5  items-center justify-center'>
                <div className='flex flex-row mt-5 mr-5 items-center justify-center'>
                    <div className='bg-white w-[150px] h-[100px] ml-5 mr-5 flex items-center justify-center orange-hover'>
                        <button onClick={handleLeft}
                            className=" button2 left-triangle"></button>
                    </div>
                    <div className='bg-white w-[150px] h-[100px]  ml-5 mr-5  flex items-center justify-center orange-hover'>
                        <button onClick={handleTopBot}
                            className=" button2 up-triangle"></button>
                    </div>
                    <div className='bg-white w-[150px] h-[100px]  ml-5 mr-5  flex items-center justify-center orange-hover'>
                        <button onClick={handleTopBot}
                            className="button2 down-triangle" ></button>
                    </div>
                    <div className='bg-white w-[150px] h-[100px]  ml-5 mr-5  flex items-center justify-center orange-hover'>
                        <button onClick={handleRight}
                            className=" button2 trapezoid"></button>
                    </div>

                </div>

                <hr className='mt-5 border-2' />

                <div className='flex flex-col '>
                    <div className='flex flex-row grid grid-cols-3 mt-0 items-center justify-center'>
                        <div
                            className='bg-white w-[150px] h-[100px]  mr-9 ml-9 mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[0] }}
                        >
                            <button className="button rectangle" onClick={handleRandomPosition}></button>
                        </div>
                        <div
                            className='bg-white w-[150px] h-[100px]  mr-9 ml-9 mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[1] }}
                        >
                            <button className="button circle" onClick={handleRandomPosition}></button>
                        </div>
                        <div
                            className='bg-white w-[150px] h-[100px]  mr-9 ml-9  mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[2] }}
                        >
                            <button className="button oval" onClick={handleRandomPosition}></button>
                        </div>
                        <div
                            className='bg-white w-[150px] h-[100px] mr-9 ml-9 mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[3] }}
                        >
                            <button className="button rectangle3" onClick={handleRandomPosition}></button>
                        </div>
                        <div
                            className='bg-white w-[150px] h-[100px]  mr-9 ml-9 mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[4] }}
                        >
                            <button className="button rectangle2" onClick={handleRandomPosition}></button>
                        </div>
                        <div
                            className='bg-white w-[150px] h-[100px] mr-9 ml-9  mt-5 flex items-center justify-center orange-hover'
                            style={{ order: orders[5] }}
                        >
                            <button className="button parallelogram" onClick={handleRandomPosition}></button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}

