import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    renderItems() {
        const itemNames = [
            {id:1,name:"home",link:"/"}, 
            {id:2,name:"our services",link:"/services"}, 
            {id:3,name:"how we work",link:"/about"}, 
            {id:4,name:"news",link:"/news"}, 
            {id:5,name:"testimonials",link:"/testimonials"}
        ]

        return itemNames.map((item) => {
            return (
                <li className="menu_item" key={item.id} title={item.name}>
                    <NavLink 
                    className={item.name.replace(/\s/g, '')}
                    to={item.link}>
                        {item.name}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <nav id="header_nav">
                <ul>
                    {this.renderItems()}
                </ul>
            </nav>
        )
    }    
  }

  export default NavBar