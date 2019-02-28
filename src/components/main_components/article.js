import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    state = {
        visible: false,
    }
    handleOnClick = (e) => {
        e.preventDefault()
        this.setState({visible: true})
    }
    handleOnClickHide = (e) => {
        e.preventDefault()
        this.setState({visible: false})
    }
    render() {
        const { title, text, additional_text } = this.props.data
        const { visible } = this.state
        return (    
            <article className="article-item">
                <h2 className="article_title">{title}</h2>
                <div className="article-content">
                    <p>{text}</p>
                    {
                        visible && <p>{additional_text}</p>
                    }
                </div>
                {
                    visible && <button onClick={this.handleOnClickHide}>Hide</button>
                }
                {
                    !visible && <button onClick={this.handleOnClick}>Read more</button>
                }
            </article>
        )        
    }            
  } 
  
Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        additional_text: PropTypes.string.isRequired
    })
}

export default Article;