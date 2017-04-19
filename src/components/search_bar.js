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
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}

export default SearchBar;