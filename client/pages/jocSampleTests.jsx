var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';




var NumberSeries = React.createClass({

	render: function(){
		
		return (
			<div className="">{patterns}</div>
		);
	}
});

	
ReactDOM.render(
	<NumberSeries />, document.getElementById('ns-item')
);

	



