import './Card.css';
import Bootcamp_Certificate from '../../src/images/Bootcamp_Certificate.jpg';
import { FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";

const CertCard = () => {
    return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                
                    <div className='skills-container'>
                        <p className='skills'>Tools of the trade. I started my coding journey at NuCamp but I continue to learn more every day.</p>
                    </div>
                
                <div className='row'>
                    <div className='logos-container'>
                        <div className='container-fluid'>
                            <FaHtml5 className='htmlLogo' />
                            <FaCss3Alt className='cssLogo' />
                            <FaJs className='jsLogo' />
                            <FaNodeJs className='nodeLogo' />
                            <FaBootstrap className='bstrapLogo' />
                            <FaReact className='reactLogo' />
                        </div>
                    </div>
                </div>
            </div>
                <div className='col'>
                    <div className='cert_card'>
                        <div>
                            <img src={Bootcamp_Certificate} className='certificate rounded' alt='NuCamp Bootcamp Certificate' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertCard;