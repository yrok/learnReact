import React from 'react';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'initSearchQuery'
    };
  }

  handleChange(event) {
    console.log('handleChange', event.target.value);
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleClick() {
    console.log('handleClick', this.state.searchQuery);
  }
// , this.state.searchQuery
  render() {
    return (
      <div className="search-tool">
        <div>
          {this.state.searchQuery}
        </div>
        <input
          onChange={this.handleChange.bind(this)}
          className="input-search"
          type="txt">
        </input>
        <button
          onClick={this.handleClick.bind(this)}
          className="btn-search">
          {this.props.searchPrompt}
        </button>
      </div>
    );
  }
}

export default SearchView;
