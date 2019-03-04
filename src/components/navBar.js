import React from 'react';

class NavBar extends React.Component {
    renderItems() {
        const itemNames = [
            {id:1,name:"home"}, 
            {id:2,name:"our services"}, 
            {id:3,name:"how we work"}, 
            {id:4,name:"news"}, 
            {id:5,name:"testimonials"}
        ]

        return itemNames.map((item) => {
            return (
                <li className="menu_item" key={item.id}>
                    <div title={item.name} className={item.name.replace(/\s/g, '')}>
                        {item.name}
                    </div>
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