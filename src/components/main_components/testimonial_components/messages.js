import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
    render() {
        const { title, text, author } = this.props.data
        return (    
            <article className="article-item">
                <h2 className="article_title">{title}</h2>
                <div className="article-content">
                    <p>{text}</p>
                    <p>{author}</p>
                </div>
            </article>
        )        
    }            
  } 
  
Message.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    })
}

class Messages extends React.Component {
    
    renderMessages = () => {
        const {data} = this.props
        let Messages_content = null
  
        if (data.length) {
            Messages_content = data.map((item) => {
                return <Message key={item.id} data={item}/>
            })
        } else {
            Messages_content = <p>There arn't any testimonials yet</p>
        }
  
        return Messages_content
    }    
    render() {
        return (
            <React.Fragment>
                <div className="articles-wrap">
                    {this.renderMessages()}
                </div>  
                
            </React.Fragment>                          
        );
    }
  }
  
Messages.propTypes = {
    data: PropTypes.array.isRequired
}

export default Messages;