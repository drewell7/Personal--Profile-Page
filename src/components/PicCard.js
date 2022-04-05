import './Card.css';
import Family from '../../src/images/Family.jpg';


const PicCard = () => {
    return (
        <div className='family_card'>
            <div>
            <img src={Family} className='family' />
            </div>
        </div>
    );
};

export default PicCard;