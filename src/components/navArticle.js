import React from 'react';
import PropTypes from 'prop-types';
import LinkBtn from './linkBtn'
import { NavLink } from 'react-router-dom'

class NavArticle extends React.Component {
    
    render() {
        const { title, text, to } = this.props.data
        return (    
            <article className="article-item home-item">
                <NavLink to={to}>
                    <h2 className="article_title">{title}</h2>
                </NavLink>    
                <div className="article-content">
                    <p>{text}</p>
                </div>
                <LinkBtn to={to} label={title} />
            </article>
        )        
    }            
  } 
  
NavArticle.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default NavArticle;