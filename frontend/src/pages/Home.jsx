import "./Home.css";
import Nav from "../components/Nav";

const Home = () => {
	//TODO fetch boat data
	return (
		<div className='wrapper'>
			<Nav />
			<main>
				<h1>Boat Rental</h1>
			</main>
		</div>
	);
};

export default Home;
