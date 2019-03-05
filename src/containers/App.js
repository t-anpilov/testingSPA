import React from 'react'
import Header from '../components/header'
import Banners from '../components/banners'
import Footer from '../components/footer'
import Main from './main';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Banners />
                <Main />    
                <Footer />
            </React.Fragment>
        )
    }      
}

export default App;