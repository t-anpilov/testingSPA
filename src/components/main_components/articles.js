import React from 'react';
import PropTypes from 'prop-types';
import Article from './article';

class Articles extends React.Component {
    
    renderArticles = () => {
        const {data} = this.props
        let Articles_content = null
  
        if (data.length) {
            Articles_content = data.map((item) => {
                return <Article key={item.id} data={item}/>
            })
        } else {
            Articles_content = <p>There arn't any articles yet</p>
        }
  
        return Articles_content
    }    
    render() {
        return (
            <div className="articles-wrap">
                    {this.renderArticles()}
            </div>  
        );
    }
  }
  
Articles.propTypes = {
    data: PropTypes.array.isRequired
}

export default Articles;