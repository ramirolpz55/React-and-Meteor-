import React from 'react';

const ImageScore = (props) => {
	// props.ups is the number of upvotes. 
	//props.downs is the number of downvotes.

	//Whenever you use ` (backTick) this means we are using a template string part of es6

	//This is an example of destructuring written below is the same thing as writing ==
	//const ups = props.ups;
	//const donws = props.downs;
	const { ups, downs } = props;

	const upsPercent = `${100 * (ups / (ups + downs))}%`;
	const downsPercent = `${100 * (downs / (ups + downs))}%`;

	return (
		<div>
			Ups/Downs
			<div className="progress">
				<div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
				<div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
			</div>	
		</div>
	);
};

export default ImageScore;