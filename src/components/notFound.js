import React from 'react';
import { NavLink } from 'react-router-dom'

export default class NotFound extends React.Component {
    render() {
        return (
        <section className="template">    
            <article className="article-item">
                <h2 className="article_title">Page not found.</h2>
                <div className="article-content">
                    <p>
                        Return to                        
                        <NavLink to="/"> home </NavLink>
                    </p>
                </div>
            </article>
        </section>    
        )
    } 
}