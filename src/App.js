import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Posts />
					</Route>
					<Route exact path="/posts">
						<Posts />
					</Route>
					<Route exact path="/posts/:postId">
						<PostDetails />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
