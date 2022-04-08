import './Card.css';
import Bootcamp_Certificate from '../../src/images/Bootcamp_Certificate.jpg';
import { FaJs } from "react-icons/fa";

const CertCard = () => {
    return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                <div>
                    <FaJs className='logos' />
                </div>
                </div>
                <div className='col'>
                    <div className='cert_card'>
                        <div>
                            <img src={Bootcamp_Certificate} className='certificate' alt='NuCamp Bootcamp Certificate' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertCard;