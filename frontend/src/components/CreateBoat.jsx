import axios from "axios";

const CreateBoat = () => {
	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target); // bezieht sofort alle Daten aus d <form>
		const response = await axios.post("/api/boats", formData);
		console.log(response);
		e.target.reset();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Name' name='name' />
			<input type='number' placeholder='Year of manufacture' name='baujahr' />
			<input type='text' placeholder='Serial Number' name='seriennummer' />
			{/* <input type='text' placeholder='Type' name='bootsart' /> */}
			<select name='bootsart'>
				<option value='pedalboat'>pedal boat</option>
				<option value='sailboat'>sailboat</option>
				<option value='yacht'>yacht</option>
				<option value='canoe'>canoe</option>
				<option value='motorboat'>motorboat</option>
				<option value='rowboat'>rowboat</option>
			</select>
			<input type='file' placeholder='Image' name='image' />
			<button type='submit'>Send</button>
		</form>
	);
};

export default CreateBoat;
