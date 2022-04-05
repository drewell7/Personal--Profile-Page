import './Card.css';
import Bootcamp_Certificate from '../../src/images/Bootcamp_Certificate.jpg';

const CertCard = () => {
    return (
        <div className='container'>
            <div className='cert_card'>
                <div>
                    <img src={Bootcamp_Certificate} className='certificate' />
                </div>
            </div>
        </div>
    );
};

export default CertCard;