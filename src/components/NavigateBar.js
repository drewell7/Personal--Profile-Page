import { Navbar, NavbarBrand } from 'reactstrap';
import './Nav.css';
import DElogo from '../../src/images/DELogob.png';
import { FaChevronDown } from "react-icons/fa";

const NavigateBar = () => {
    return (
        <Navbar sticky={'top'} dark color="dark">
            
            <NavbarBrand>
                <img src={DElogo} width="60" height="60" className='DEIcon' alt="" />
            </NavbarBrand>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        </div>
                        <div className='col downLinks'>
                            <h4 className='downLinkTitle'>BIO</h4>
                            <FaChevronDown className='downIcon' />
                        </div>
                        <div className='col downLinks'>
                            <h4 className='downLinkTitle'>SKILLS</h4>
                            <FaChevronDown className='downIcon' />
                        </div>
                        <div className='col downLinks'>
                            <h4 className='downLinkTitle'>PROJECTS</h4>
                            <FaChevronDown className='downIcon' />
                        </div>
                        <div className='col downLinks'>
                            <h4 className='downLinkTitle'>CONTACT</h4>
                            <FaChevronDown className='downIcon' />
                        </div>
                    </div>
                </div>
            </Navbar>
    );
};

export default NavigateBar;