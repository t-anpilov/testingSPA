import React from 'react';
import Articles from './articles';
class Home extends React.Component {
    state = {
        articles: null,
        isLoading: false,
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
            }, 1000)
        })
    }
   
    render() {
        const { articles, isLoading } = this.state

        return (
            <section className="template">
                {isLoading && <p>Loading...</p>}
                {Array.isArray(articles) && <Articles data={articles} />}
            </section>    
        )
    }
}

export default Home