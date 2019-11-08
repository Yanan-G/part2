import React from 'react'

export default ({ countries }) => {
	console.log(countries)
	const { name, capital, population, languages, flag } = countries[0]
	return (
		<div>
			<h2>{name}</h2>
			<div>
				<p>capital {capital}</p>
				<p>population {population}</p>
			</div>
			<h3>languages</h3>
			<ul>
				{languages.map((language, i) => (
					<li key={i}>{language.name}</li>
				))}
			</ul>
			<img src={flag} alt="flag" style={{ width: 200, height: 200 }} />
		</div>
	)
}
