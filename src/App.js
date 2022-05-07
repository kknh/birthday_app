import React, { useEffect, useReducer } from 'react'
import data from './data'
import List from './List'
function App() {
	//const [people, setPeople] = useState(data)

	const peopleReducer = (state, action) => {
		switch (action.type) {
			case 'GET_PEOPLE':
				return {
					...state,
					people: action.payload,
				}
			case 'CLEAR_PEOPLE':
				return {
					...state,
					people: [],
				}
			default:
				return state
		}
	}

	const initialState = {
		people: [],
	}

	const fetchPeople = () => {
		dispatch({ type: 'GET_PEOPLE', payload: data })
	}

	useEffect(() => {
		//fetchPeople()
		dispatch({ type: 'GET_PEOPLE', payload: data })
	}, [])

	const [state, dispatch] = useReducer(peopleReducer, initialState)

	const people = state.people

	return (
		<main>
			<section className="container">
				<h3> {people.length} birthdays today</h3>
				<List people={people} />
				<button
					onClick={() =>
						dispatch({
							type: 'CLEAR_PEOPLE',
						})
					}
				>
					clear all
				</button>
			</section>
		</main>
	)
}

export default App
