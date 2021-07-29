import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Home />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</Router>
		</>
	);
}

export default App;
