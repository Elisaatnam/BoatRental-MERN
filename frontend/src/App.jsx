import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { boatContext } from "./context/Context";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
import Reservation from "./pages/Reservation";
import { useState } from "react";

function App() {
	const [boats, setBoats] = useState([]);

	return (
		<>
			<boatContext.Provider value={{ boats, setBoats }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/boats' element={<Boats />} />
						<Route path='/reservation' element={<Reservation />} />
					</Routes>
				</BrowserRouter>
			</boatContext.Provider>
		</>
	);
}

export default App;
