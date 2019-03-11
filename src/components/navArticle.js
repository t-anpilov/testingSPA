import React from 'react';
import PropTypes from 'prop-types';
import LinkBtn from './linkBtn'

class NavArticle extends React.Component {
    
    render() {
        const { title, text, to } = this.props.data
        return (    
            <article className="article-item">
                <h2 className="article_title">{title}</h2>
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