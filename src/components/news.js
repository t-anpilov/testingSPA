import React from 'react';

export default class News extends React.Component {
    render() {
        return (
        <section className="template">    
            <article className="article-item">
                <h2 className="article_title">News</h2>
                <div className="article-content">
                    <p>
                        We had opened new office in our country's main city.
                    </p>
                </div>
            </article>
        </section>
        )
    } 
}