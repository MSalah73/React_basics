import React from 'react'

const Column = (props) => {
	return (
		<div className="col-4">
			<h3>{props.title}</h3>
			<p>{props.infromation}</p>	
		</div>
	)
}

export default Column