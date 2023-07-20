import { Link } from "react-router-dom";
import "./Nav.css";
import homeIcon from "../assets/img/home.png";
import boatIcon from "../assets/img/bootschwarz.png";
import calendarIcon from "../assets/img/kalender.png";

const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<img src={homeIcon} alt='Home' className='navimg' />
			</Link>
			<Link to='/boats'>
				<img src={boatIcon} alt='Boats' className='navimg' />
			</Link>
			<Link to='/reservation'>
				<img src={calendarIcon} alt='Boats' className='navimg' />
			</Link>
		</nav>
	);
};

export default Nav;
