import photo1 from '../../assets/photo/other_photo/pexels-citronovalimonada-687811.jpg'
import photo2 from '../../assets/photo/other_photo/pexels-garrettmorrow-1337247.jpg'
import photo3 from '../../assets/photo/other_photo/pexels-kerber-2708981.jpg'


interface InformationProps {
    onClickModal: () => void;
  }

  const Information: React.FC<InformationProps> = ({ onClickModal }) => {
    return (
        <section className="main-info">
            <div className="main-photo">
                <div>
                    <img className='one-info-photo' src={photo1} alt="photo1"/>
                    <img className='two-info-photo' src={photo2} alt="photo2"/>
                </div>
                <img className='three-info-photo' src={photo3} alt="photo3"/>
            </div>
            <div className='all-title'>
                <h2 className="title-info">We are glad to see you</h2>
                <p className="under-title-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut optio
                    tenetur
                    dolorem ullam fuga itaque nam mollitia sed nemo!
                </p>
                <button onClick={onClickModal} className="btn-info">More...</button>
            </div>
        </section>
    );
}

export default Information;
