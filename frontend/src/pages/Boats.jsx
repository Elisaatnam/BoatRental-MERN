import { useContext } from "react";
import Nav from "../components/Nav";
import { boatContext } from "../context/Context";
import CreateBoat from "../components/CreateBoat";

const Boats = () => {
	const { boats, setBoats } = useContext(boatContext);
	return (
		<div className='wrapper'>
			<Nav />
			<main>
				<h1>Boats</h1>
				<CreateBoat />
			</main>
		</div>
	);
};

export default Boats;
