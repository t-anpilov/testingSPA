import React from 'react';
import Articles from './articles';
import Add from './add';

class Home extends React.Component {
    state = {
        articles: null,
        isLoading: false,
    }
    
    static getDerivedStateFromProps(props, state) {
        let nextFilteredAdds

        if (Array.isArray(state.articles)) {
            nextFilteredAdds = [...state.articles]
        
            nextFilteredAdds.forEach((item, index) => {
                if (item.text.toLowerCase().indexOf('lopata') !== -1){
                    item.text = 'SPAM'
                }
             })
            return { filteredAdds: nextFilteredAdds }
        }
        return null
    }    

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:3000/data/articlesBase.json')
            .then (response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                this.setState({ isLoading: false, articles: data })
            }, 1500)
        })
    }
    handleAddArticles = data => {
        
        const nextArticles = [data, ...this.state.articles]
        this.setState({articles: nextArticles})
    }
    
    render() {
        const { articles, isLoading } = this.state

        return (
            <section className="home_page">
                {isLoading && <p>Loading...</p>}
                {Array.isArray(articles) && <Articles data={articles} />}
                <Add onAddArticles={this.handleAddArticles} />
            </section>    
        )
    }
}

export default Home