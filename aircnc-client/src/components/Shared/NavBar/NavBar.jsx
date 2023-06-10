import React from 'react';
import Container from '../Container';
import logo from "../../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Search from './Search';
import MenuDropdown from './MenuDropDown';
const NavBar = () => {
    return (
        <div className='fixed w-full bg-white shadow-sm z-10'>
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className='flex flew-row items-center justify-between gap-3 md:gap-0'>
                        <div>
                            <Link to="/"><img src={logo} alt="air-cnc-logo" className='w-[100px] h-[40px] hidden md:block' /></Link>
                        </div>
                        <Search/>
                        <MenuDropdown/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;