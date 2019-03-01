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
            <section className="home">
                <Articles data={this.state.articles} />
                <Add onAddArticles={this.handleAddArticles} />
            </section>    
        )
    }
}

export default Home