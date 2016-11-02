//Any JS in here is automatically ran for us 

//Import the React Library 
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

//Create a function component 
//A component is a single function or object which produces some amount of HTML and lets us render that to the screen. 
// const App = () => {
// 	return (
// 		<div>
// 		  <ImageList />
// 		</div>
// 	);
// };

//This is a class based component 
//The render menthod is a special method in a class based component 
class App extends Component {
	componentWillMount(){
		//This is a fantastic location to laod data 
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => console.log(response));
		//console.log("App is about to render");
	}
	//State is a javascript object that we can make changes to. 

	render() {
		return (
			<div>
				<ImageList />
			</div>
		);
	}
}


//Render this component to the screen 
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});


