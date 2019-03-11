import React from 'react';
import PropTypes from 'prop-types';
import NavArticle from './navArticle';

class Navigation extends React.Component {
    
    renderNavItems = () => {
        const {data} = this.props
        let navItems = null
  
        if (data.length) {
            navItems = data.map((item) => {
                return <NavArticle key={item.id} data={item}/>
            })
        } 

        return navItems
    }    
    render() {
        return (
            <div className="articles-wrap">
                    {this.renderNavItems()}
            </div>  
        );
    }
  }
  
Navigation.propTypes = {
    data: PropTypes.array.isRequired
}

export default Navigation;