import React from 'react';
import PropTypes from 'prop-types';

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

export default Add;