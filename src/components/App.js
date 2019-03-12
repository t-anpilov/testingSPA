import React from 'react'
import Header from './header'
import Banners from './banners'
import Footer from './footer'
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