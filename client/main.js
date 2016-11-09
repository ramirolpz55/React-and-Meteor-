//Any JS in here is automatically ran 
//*******RUN FILES WITH meteor run in the cmd line 
//Import the React Library 
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// A component is a single function or object which produces some amount of HTML and lets us render that to the screen. 
//This is a class based component 
//The render menthod is a special method in a class based component 
//constructor method to our class is a special method to a js class wheneer a class is instantiated the constructor method is auto called 
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { images: [] };
	}


	componentWillMount(){
		//This is a fantastic location to laod data 
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => this.setState({ images: response.data.data }));
		//console.log("App is about to render");
		//Never do this- 
		//this.state.images = [ {}, {} ];
	}
	//State is a javascript object that we can make changes to. And whenever we chnage this object component will automatically re render. 

	render() {
		//console.log(this.state.images);
		return (
			<div>
				<ImageList images={this.state.images} />
			</div>
		);
	}
}


//Render this component to the screen 
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});


