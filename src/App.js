import React from 'react';
import './App.css';
import Header from './components/header';
import Banners from './components/banners';
import Main from './components/main';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Banners />
                <Main />
            </React.Fragment>
        )
    }      
}

export default App;