import React from 'react';
import Articles_base from './main_components/articles_base';
import Articles from './main_components/articles';
import Aside from './main_components/aside';
import Add from './main_components/add';
   
class Main extends React.Component {
    state = {
        articles: Articles_base,
    }
    handleAddArticles = (data) => {
        
        const nextArticles = [data, ...this.state.articles]
        this.setState({articles: nextArticles})
    }
    render() {
        return (
            <main>
                <Articles data={this.state.articles} />
                <Aside data={this.state.articles}/>
                <Add onAddArticles={this.handleAddArticles} />
            </main>    
        )
    }
}

export default Main