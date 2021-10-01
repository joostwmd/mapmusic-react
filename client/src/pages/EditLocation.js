import axios from 'axios';
import { useState, useEffect } from 'react'

export default function EditLocation(props) {

	const API_URL = 'http://localhost:5005';

	const [name, setName] = useState('');
	const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')

	const locationId = props.match.params.id;
    console.log(locationId)
	useEffect(() => {
		axios.get(`${API_URL}/api/location/${locationId}`)
			.then(response => {
				setName(response.data.name);
				setLongitude(response.data.longitude);
                setLatitude(response.data.latitude)
			})
			.catch(err => console.log(err))
	}/*, []*/)

	const deleteProject = () => {
		axios.delete(`${API_URL}/api/location/${locationId}`)
			.then(() => {
				// redirect to the project list
				props.history.push('/locations');
			})
			.catch(err => console.log(err));
	}

	const handleSubmit = e => {
		e.preventDefault();
		const requestBody = { name, longitude, latitude };
		axios.put(`${API_URL}/api/location/${locationId}`, requestBody)
			.then(response => {
				// this is a redirect using react router dom 
				props.history.push(`/location/${locationId}`);
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<h3>edit this location</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">edit name of location</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>

				<label htmlFor="longitude">edit logitude of location </label>
				<input
					type="text"
					name="longitude"
					value={longitude}
					onChange={e => setLongitude(e.target.value)}
				/>

				<label htmlFor="latitude">edit latitude of location </label>
				<input
					type="text"
					name="latitude"
					value={latitude}
					onChange={e => setLatitude(e.target.value)}
				/>
				<button type="submit">update this location</button>
			</form>

			<button onClick={deleteProject}>delete this location</button>

		</div>
	)
}
