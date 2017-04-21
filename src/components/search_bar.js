import React, { Component } from 'react';
// equivalent to const Component = React.Component

import ReactDOM from 'react-dom';

// Define a new class called "SearchBar", and give it access to 
// all of the functionality that React.Component class has.
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;