import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks'

// class App extends React.Component {
// 	render() {
// 		return <h1>Hello from a class</h1>
// 	}
// }

const App = () => {
	// we put this inside App component so that we can use these in other components
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Lunch at Haidilao',
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Breakfast in School',
            day: 'Feb 9th at 8:30am',
            reminder: false,
        }
    ])

	return (
		<div className='container'>
			<Header />

			<Tasks tasks={tasks} />
		</div>
	)
}

// function App() {
// 	const name = 'Jewel'
// 	const isRaining = true
// 	return (
// 		// note that you can only have ONE parent element
// 		<div className="App">
// 			<Header />

// 			<h1>Hello {name}</h1>
// 			<h2>I am a h2, {1 + 1}</h2>
// 			{/* Ternary operator */}
// 			<h3>Is it raining? {isRaining ? 'Yes' : 'No'}</h3>			
// 		</div>
// 	);
// }

export default App;
