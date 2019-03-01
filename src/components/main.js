import React from 'react';
import Articles_base from './main_components/articles_base';
import Aside from './main_components/aside';
import Home from './main_components/home';
   
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
                <Home />
                <Aside data={this.state.articles}/>
            </main>    
        )
    }
}

export default Main