import PropTypes from 'prop-types';
import './footer_draggable_2.css';

/*

* WE GOT PROBLEMS WITH THE USER INPUT, ESPECIFICALLY WITH THE LOCATION,
* THE EMBEDDED MAP DOESN'T WORK PROPERLY WHEN THE USER PROVIDES THE LINK AT GOOGLE MAPS
* AND IT WOULD OVERWHELM THE USER TO PROVIDE THE EMBEDDED CODE INSTEAD OF THE LINK

*/

export const inputs_Footer_draggable_2 = ['tel', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'color', 'color']

export const Footer_draggable_2 = (
  { tel = '1 234 567 8901',
    location = '<embed src="https://www.google.com/maps/embed?your_embed_code_here" />',
    facebook = 'https://www.facebook.com',
    instagram = 'https://www.instagram.com',
    twitter = 'https://twitter.com/home',
    youtube = 'https://www.youtube.com',
    copyright = '© Year Business',
    backColor = '#293241',
    fontColor = '#e3e3e3'
  }) => {
  /**
   * @param {string} tel - The telephone number of the business
   * @param {string} location - The location of the business
   * @param {string} facebook - The facebook link of the business
   * @param {string} instagram - The instagram link of the business
   * @param {string} twitter - The twitter link of the business
   * @param {string} youtube - The youtube link of the business
   * @param {string} copyright - The year and name of the business
   * @param {string} backColor - The background color of the footer
   * @param {string} fontColor - The font color of the footer
   */

  const lsr = " Proudly created with Sites ©";
  const style = {
    backgroundColor: backColor,
    color: fontColor
  }

  return (
    <footer style={style} className="footer_draggable_2">

      <section class="footer-columns-sect">
          
        <section>
          <h3>Contactanos</h3>
          <ul>
            <li>Teléfono: <a href={'tel:'+tel}>{tel}</a> </li>
            <li> <a href={ location } target="_blank">Ubicación</a> </li>
          </ul>
        </section>

        <section>
          <h3>Redes sociales</h3>
          <ul>
            <li> <a href={ facebook } target="_blank">Facebook</a> </li>
            <li> <a href={ instagram } target="_blank">Instagram</a> </li>
            <li> <a href={ twitter } target="_blank">Twitter</a></li>
            <li> <a href={ youtube } target="_blank">Youtube</a></li>
          </ul>
        </section>

        <section className='map-section' dangerouslySetInnerHTML={{ __html: location }}></section>
        
      </section>

      <section class="footer-copyright">
        <h5>{ copyright + lsr }</h5>
      </section>

    </footer>
  );
}

Footer_draggable_2.propTypes = {
  tel: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired
};
 
//export default Footer_draggable_2;