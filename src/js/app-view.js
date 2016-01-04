// Import React
import React from 'react';

import SearchView from './search-view';

// Create class called AppView that extends the base React Component class
class AppView extends React.Component {
  render() {
    let searchPrompt = '度娘一下';

    return (
      <div className="container-search">
        <img className="img-logo" src="https://www.baidu.com/img/bd_logo1.png" alt="logo" />
        <SearchView searchPrompt={searchPrompt} />
      </div>
    );
  }
}

export default AppView;
