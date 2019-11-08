import React from 'react'
import View from './View'

export default ({ length, countries, handleClick }) => {
	if (length > 10) {
		return <p>too many</p>
	} else if (length === 1) {
		return <View countries={countries} />
	} else {
		return countries.map((country, i) => {
			return (
				<div key={i}>
					{country.name}
					<button onClick={handleClick} id={i}>
						show
					</button>
				</div>
			)
		})
	}
}
