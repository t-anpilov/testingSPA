import React from 'react';
import NavBar from './navBar'

class Header extends React.Component {
    render() {
        return (
            <header>
                <CompanyName />
                <NavBar />
            </header>
        )
    };
}

const CompanyName = () => {
    return <h1>Great Construction Company</h1>
}


export default Header;