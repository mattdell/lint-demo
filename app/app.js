import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

const Hello = (props) => {
	return (
		<Jumbotron>
			<h2>Hello {props.name}</h2>
		</Jumbotron>
	);
};

Hello.propTypes = {
	name: PropTypes.string
};

ReactDOM.render(<Hello name='London'/>,
	document.getElementById('app')
);
