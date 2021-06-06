import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import './style.css'
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import Footer from './Footer';

class App extends Component {
	state = {images: []};

	onSearchSubmit = async (term) => {
		const response = await unsplash.get(`/search/photos`, {
			params: {query: term},
		});
		this.setState({images: response.data.results});
	};

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
				<Footer/>
			</div>
		);
	}
}

export default App;

