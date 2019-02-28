import React from 'react';
import NavBar from './navBar';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <NavBar />
                <address>
                    <h3>Contact us</h3>
                    <p>Phone: <a href="tel:8(302)333-4343">8(302)333-4343</a></p>
                    <p>Email: <a href="mailto:gcc@info.com">gcc@info.com</a></p>
                    <p>Office: City-Name, 33street, 4343</p>
                </address>
            </footer>    
        )
    }
}

export default Footer;