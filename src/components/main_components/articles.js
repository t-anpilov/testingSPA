import React from 'react';
import PropTypes from 'prop-types';
import Article from './article';

class Articles extends React.Component {
    state = {
        filteredAdds: this.props.data
    }
    static getDerivedStateFromProps(props, state) {
        let nextFilteredAdds = [...props.data]

        nextFilteredAdds.forEach((item, index) => {
            if (item.text.toLowerCase().indexOf('lopata') !== -1){
                item.text = 'SPAM'
            }
        })

        return { filteredAdds: nextFilteredAdds }
    }
    renderArticles = () => {
        const {filteredAdds} = this.state
        let Articles_content = null
  
        if (filteredAdds.length) {
            Articles_content = filteredAdds.map((item) => {
                return <Article key={item.id} data={item}/>
            })
        } else {
            Articles_content = <p>There arn't any articles yet</p>
        }
  
        return Articles_content
    }    
    render() {
        return (
            <React.Fragment>
                <div className="articles-wrap">
                    {this.renderArticles()}
                </div>  
                
            </React.Fragment>                          
        );
    }
  }
  
Articles.propTypes = {
    data: PropTypes.array.isRequired
}

export default Articles;