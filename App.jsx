import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<Router history={}>
					<Route path="/" component={}>
						<IndexRoute component={} />
						<Route path="" component={} />
						<Route path="" component={} />
						<Route path="" component={} />
					</Route>
				</Router>
			</div>
		);
	}
}

export default App;
