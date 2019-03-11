import React from 'react';
import Articles from './main_components/articles';

export default class Services extends React.Component {
    state = {
        articles: null,
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/servicesBase.json')
            .then (response => {
                return response.json()
            })
            .then(data => {
                this.setState({ articles: data })
            })
    }
    
    render() {
        const { articles } = this.state

        return (
            <section className="template">
                {Array.isArray(articles) && <Articles data={articles} />}
            </section>    
        )
    }
}