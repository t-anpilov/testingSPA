import React from 'react';
import Aside from './main_components/aside';
import Home from './main_components/home';
   
class Main extends React.Component {
    render() {
        return (
            <main>
                <Home />
                <Aside />
            </main>    
        )
    }
}

export default Main