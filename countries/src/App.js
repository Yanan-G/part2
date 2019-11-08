import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import View from './components/View'

const App = () => {
	const [query, setQuery] = useState('')
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then(res => {
			console.log(res.data)
			setCountries(res.data)
		})
	}, [])
	const handleClick = e => {
		console.log(e.target.id)
		setCountries([filteredCountries[e.target.id]])
	}

	const handleChange = e => setQuery(e.target.value)

	const filteredCountries = countries.filter(
		country =>
			query.length > 0 &&
			country.name.toLowerCase().includes(query.toLowerCase())
	)

	return (
		<div>
			{'find countries'}
			<input onChange={handleChange} value={query} />
			{query.length > 0 && (
				<Country
					length={filteredCountries.length}
					countries={filteredCountries}
					handleClick={handleClick}
				/>
			)}
		</div>
	)
}

export default App
