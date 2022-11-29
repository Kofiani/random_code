import React, { useState } from 'react'
const StatefulComponent = () => {
	const [defaultState, setDefaultState] = useState(1)
	return (
    <>
		<div>{defaultState}</div>
		<button onClick={() => setDefaultState(num => num * 2)}>
		click me</button>
    </>
	)
}
export default StatefulComponent;