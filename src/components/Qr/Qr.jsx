import './Qr.css';
import qrImage from '../../images/pictures/qr.png';

export default function Qr(){
    return (
        <div className='qr__block'>

            <h2 className='qr__title'>
                Подпишись на уведомления от нашего ТГ-Бота,
                чтобы забирать задачу первым!
            </h2>

            <div className='qr__wrapper'>
                <div className='qr__arrow'></div>

                <img 
                    src={qrImage} 
                    alt="QR code"
                    className='qr__image' 
                />
            </div>

        </div>
    );
}