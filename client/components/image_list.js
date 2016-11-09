//Create our image list component 
//Import React
import React from 'react';
import ImageDetail from './image_detail';

//Create our component 
//image={image} 1stimage is considered a property and 2nd is an image object 1st image can be named whatever you want ex: picture
const ImageList = (props) => {
	const validImages = props.images.filter(image => !image.is_album);

	const RenderedImages = validImages.map(image => {
		return <ImageDetail key={image.title} image={image} />
	});

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

//Export our component 
export default ImageList;

