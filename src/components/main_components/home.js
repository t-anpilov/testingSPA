import React from 'react';
import Articles_base from './articles_base';
import Articles from './articles';
import Add from './add';

class Home extends React.Component {
    state = {
        articles: Articles_base,
    }
    handleAddArticles = (data) => {
        
        const nextArticles = [data, ...this.state.articles]
        this.setState({articles: nextArticles})
    }
    render() {
        return (
            <section className="home_page">
                <Articles data={this.state.articles} />
                <Add onAddArticles={this.handleAddArticles} />
                { this.state.articles.length ? (<p className="articl_num">Total number of articles is: {this.state.articles.length}</p>) : null }
            </section>    
        )
    }
}

export default Home