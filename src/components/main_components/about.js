import React from 'react';
import Articles from './articles';

export default class About extends React.Component {
    state = {
        articles: null,
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/data/aboutBase.json')
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
                <h2 className="template_title">how we work</h2>
                {Array.isArray(articles) && <Articles data={articles} />}
            </section>    
        )
    }
}