import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { boatContext } from "../context/Context";
import CreateBoat from "../components/CreateBoat";
import axios from "axios";

const Boats = () => {
	const { boats, setBoats } = useContext(boatContext);

	useEffect(() => {
		const fetchAllBoats = async () => {
			try {
				const { data } = await axios.get("/api/boats");
				setBoats(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchAllBoats();
	}, []);

	return (
		<div className='wrapper'>
			<Nav />
			<main>
				<h1>Boats</h1>
				<CreateBoat />
				{boats ? (
					<section>
						{boats.map(boat => (
							<div key={boat._id}>
								<h2>{boat.name}</h2>
								<img src={boat.image.url} alt={boat.name} />
							</div>
						))}
					</section>
				) : (
					<p>Loading Boats...</p>
				)}
			</main>
		</div>
	);
};

export default Boats;
