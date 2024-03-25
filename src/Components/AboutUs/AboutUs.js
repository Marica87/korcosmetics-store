import { FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsappSquare } from "react-icons/fa";

import shopkorean from "./shopkorean.jpg";

const AboutUs = () => {
    return (
        <div className="container">
        <div className="wrapp">
        <h2 id="about"> О НАС</h2>

        <div className='wrapp_aboutus'>
            <div className="aboutus-photo">
            <img className="picture"  src={shopkorean} alt="korean shop"  />
            </div>
            <div className="aboutus-text">
            <p>Beauty&Kor — это  интернет-магазин сертифицированной корейской косметики.</p>
<p>Уникальная площадка, на которой собраны лучшие косметические бренды Южной Кореи: COSRX, Medi-Peel, Ciracle, Mizon, By wishtrend, Missha, Purito, Holika Holika, Lador, Secret Key, MANYO и другие.</p>

<p>Каждый продукт, представленный в каталоге, создан из натуральных природных компонентов и имеет 100% эффективность, доказанную международными исследованиями и сертификатами качества, а также, признанием миллионов женщин во всем мире.
Мы уважаем и ценим Ваше здоровье, поэтому предлагаем только качественную продукцию.
Мы точно знаем, что настоящая красота — это естественность. Мы уверены, что «изюминка» каждой женщины в ее неповторимости.</p>
</div>
        </div>
          
       </div>

       <div className="wrapp">
        <h2 id="contact"> КОНТАКТЫ</h2>

        <div className='wrapp_contact'>
            <h4>Пункт выдачи</h4>
            <p>г. Москва, ул. Комсомольская, д.25</p>
            <p><a href="tel:88004434555">Тел: 8(800)443-45-55</a></p>
            <div className="wrapp-message">
                <a href="#"><FaInstagram className="insta" size="45px" /></a>
                <a href="#"><SlSocialVkontakte className="vk" size="45px" /></a>
                <a href="#"><FaWhatsappSquare className="whatsapp" size="45px" /></a>
            </div>
            
        </div>
          
       </div>
       </div>
    )
}

export default AboutUs;