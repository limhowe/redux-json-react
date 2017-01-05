import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import ToggleButton from './components/toggleButton';
import Items from './components/items';

import { fetchData } from './redux/actions';

class App extends Component {

  static PropTypes = {
    items: PropTypes.array.isRequed,
    isFetching: PropTypes.bool.isRequed,
    dispatch: PropTypes.func.isRequed
  }

  handleFetchData = () => {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  render() {

    const { isFetching, items } = this.props;
    const isEmpty = items.length === 0;

    let options = {
      disabled : isFetching ? true : false
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <br/>
        <br/>

        <ToggleButton onClick={this.handleFetchData} value= "FETCH DATA" options = {options}></ToggleButton>

        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty </h2>)
          : <h2>Loaded</h2>
        }

        <div>
            <Items items={items}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ( { isFetching, items} ) => ( { isFetching, items} );

export default connect(mapStateToProps)(App);
