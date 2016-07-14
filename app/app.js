import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
	return (
		<h2>Hello {props.name}</h2>
	);
};

Hello.propTypes = {
	name: PropTypes.string
};

ReactDOM.render(<Hello name='Buckley'/>,
	document.getElementById('app')
);
