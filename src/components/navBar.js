import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav id="header_nav">
            <ul>
                <li className="menu_item home active">
                    <a href="#home" title="Home">home</a>
                </li>
                <li className="menu_item about">
                    <a href="#our_services" title="Our services">our services</a>
                </li>
                <li className="menu_item how">
                    <a href="#how" title="How we work">how we work</a>
                </li>
                <li className="menu_item test">
                    <a href="#testimonials" title="Testimonials">testimonials</a>
                </li>
                <li className="menu_item example">
                    <a href="#examples" title="Work examples">work examples</a>
                </li>
            </ul>
        </nav>
        )
    }    
  }

  export default NavBar