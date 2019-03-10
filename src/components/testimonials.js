import React from 'react';
import Add from './main_components/add';

export default class Testimonials extends React.Component {
    render() {
        return (
        <section className="template">    
            <article className="article-item">
                <h2 className="article_title">Testimonials</h2>
                <div className="article-content">
                    <p>
                        I have a great idea! We can try to do some usefull things.
                    </p>
                </div>
            </article>
            <Add onAddArticles={this.handleAddArticles} />
        </section>    
        )
    } 
}