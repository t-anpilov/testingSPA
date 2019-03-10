import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
    state = {
        title: '',
        text: '',
        author: '',
        agree: false,
    }
    onButClickHandler = (e) => {
        e.preventDefault()
        const {title, text, author} = this.state
        this.props.onAddMessages({
            id: +new Date(),
            title,
            text,
            author,
        })
    }
    validate = () => {
        const { title, text, author, agree } = this.state
        if (title.trim() && text.trim() && author.trim() && agree) {
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
        const { title, text, author } = this.state
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
                <input 
                    id="author"
                    type="text"
                    className="add_title" 
                    onChange={this.handleChange}
                    placeholder="Your name"
                    value={author} 
                />
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
    onAddMessages: PropTypes.func.isRequired
}

export default Add;