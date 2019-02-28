import React from 'react';
import PropTypes from 'prop-types';

const Articles_base = [
    {
        id: 1,
        title: 'services we offer',
        text: 'GCC process exceeds project and Owner objectives through structured and consistent systems and procedures as applied by a highly-talented Project Team especially selected for each project based on their relevant experience and capabilities.',
        additional_text: 'GCC approach to Design-Build brings the design firm and the subcontractors together in a focused, team-oriented relationship offering Owners a single source of contact and responsibility. GCC has consistently demonstrated its successful Design-Build capabilities and approach as a delivery system in both the industrial and commercial sectors.',
    },
    {
        id: 2,
        title: 'how we work',
        text: 'Our experienced team has a deep understanding of how to find the real dream in every project we have the privilege of working on. We anticipate challenges and find innovative solutions to address them.',
        additional_text: 'We believe in doing things right the first time. Our craftsmen and artisans ensure an attention to detail and finish that is second-to-none and we stand proudly behind them. High-quality materials and finishes keep your investment safe and looking stunning.',
    },
    /*{
        id: 3,
        title: 'testimonials',
        text: "I have a great idea! We can try to do some usefull things.",
        additional_text: "It's about environmental protection."
    }*/
  ]
  
  class Article extends React.Component {
    state = {
        visible: false,
    }
    handleOnClick = (e) => {
        e.preventDefault()
        this.setState({visible: true})
    }
    handleOnClickHide = (e) => {
        e.preventDefault()
        this.setState({visible: false})
    }
    render() {
        const { title, text, additional_text } = this.props.data
        const { visible } = this.state
        return (    
            <article className="article-item">
                <h2 className="article_title">{title}</h2>
                <div className="article-content">
                    <p>{text}</p>
                    {
                        visible && <p>{additional_text}</p>
                    }
                </div>
                {
                    visible && <button onClick={this.handleOnClickHide}>Hide</button>
                }
                {
                    !visible && <button onClick={this.handleOnClick}>Read more</button>
                }
            </article>
        )        
    }            
  } 
  
  Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        additional_text: PropTypes.string.isRequired
    })
  }
  
  class Articles extends React.Component {
    renderArticles = () => {
        const {data} = this.props
        let Articles_content = null
  
        if (data.length) {
            Articles_content = data.map((item) => {
                return <Article key={item.id} data={item}/>
            })
        } else {
            Articles_content = <p>There arn't any articles yet</p>
        }
  
        return Articles_content
    }    
    render() {
        return (
            <React.Fragment>
                <div className="articles-wrap">
                    {this.renderArticles()}
                </div>  
                
            </React.Fragment>                          
        );
    }
  }
  
  Articles.propTypes = {
    data: PropTypes.array.isRequired
  }
  
  class Add extends React.Component {
    state = {
        title: '',
        text: '',
        additional_text: '',
        agree: false,
    }
    onButClickHandler = (e) => {
        e.preventDefault()
        const {title, text} = this.state
        this.props.onAddArticles({
            id: +new Date(),
            title,
            text,
            additional_text: '',
        })
    }
    validate = () => {
        const { title, text, agree } = this.state
        if (title.trim() && text.trim() && agree) {
            return true
        } else {
            return false
        }
    }
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({[id]: value})
    }
    handleCheckChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }
    render() {
        const { title, text } = this.state
        return (
            <form className="add">
                <input 
                    id="title"
                    type="text"
                    className="add_title" 
                    onChange={this.handleChange}
                    placeholder="Your title"
                    value={title} 
                />
                <textarea 
                    id="text"
                    className="add_text"
                    onChange={this.handleChange} 
                    placeholder="message text"
                    value={text}
                ></textarea>
                <label className="add_check">
                    <input type="checkbox" onChange={this.handleCheckChange} />
                    Accept the rules
                </label>    
                
                <button 
                    className="add_but" 
                    onClick={this.onButClickHandler}
                    disabled={!this.validate()}>
                    Add
                </button>
            </form>
        )
    }
  }
  
  Add.propTypes = {
    onAddArticles: PropTypes.func.isRequired
  }
  
  class Aside extends React.Component {
    
    render() {
        const {data} = this.props
        return (
            <aside>
            <blockquote className="quote">
                <span className="quote_mark">&#8220;</span> It is not the beauty of a building you should look at;
                its the construction of the foundation that will stand the test
                of time. <span className="quote_mark">&#8221;</span>
                <p className="author">David Allan Coe</p>
            </blockquote>
            { data.length ? (<p className="articl_num">Total number of articles is: {data.length}</p>) : null }
        </aside>
        )
    }
  }
  
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