import { h } from 'preact';
import Styles from './styles.module.scss';
import SocialIcons from '../SocialIcons/index.jsx'

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<div className={Styles.monogram}>KA</div>
			</a>
			{/* <a className={Styles.link} href="/projects">
				Portfolio
			</a> */}
			<a className={Styles.link} href="/">Home</a>
			<a className={Styles.link} href="/about">About</a>
			<div className={Styles.social}><SocialIcons /></div>
		</nav>
	);
}
export default Nav;
