import { h } from 'preact';
import Styles from './styles.module.scss';
import SocialIcons from '../SocialIcons/index.jsx'

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Kaustubh Agrawal
      {/* <small className={Styles.byline}>🚀 </small> */}
      <div className={Styles.socialIconContainer} >
        <SocialIcons large />
      </div>
    </footer>
  );
}
export default Footer;
