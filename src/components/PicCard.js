import './Card.css';
import Family from '../../src/images/Familyc.jpg';


const PicCard = () => {
    return (
            <div className='pt-5 fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='family_card'>
                        <img src={Family} className='family rounded' alt='Family at birthday party for Liam' height='620' />
                    </div>
                    </div>
                    <div className='col'>
                        <div className='bio-container'>
                           <div className=''>
                                <p className='bio'>Hello, I am a web developer focused on creating responsive, mobile first websites and apps.
                                I have graduated from the NuCamp Coding Bootcamp where I completed classes in HTML, CSS and JavaScript, as well as Bootstrap, React and React Native.
                                When I am not coding I enjoy making music with Ableton and spending time with my family. My son and I love playing 
                                video games together and he's become a big Star Wars fan like his dad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PicCard;