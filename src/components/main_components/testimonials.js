import React from 'react'
import Messages from './testimonial_components/messages'
import Add from './testimonial_components/add'

export default class Testimonials extends React.Component {
    state = {
        messages: null,
        isLoading: false,
    }
    static getDerivedStateFromProps(props, state) {
        let nextFilteredAdds

        if (Array.isArray(state.messages)) {
            nextFilteredAdds = [...state.messages]
        
            nextFilteredAdds.forEach((item) => {
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
        fetch('http://localhost:3000/data/testimonials.json')
            .then (response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                this.setState({ isLoading: false, messages: data })
            }, 1000)
        })
    }
    handleAddMessages = data => {
        const nextMessages = [data, ...this.state.messages]
        this.setState({messages: nextMessages})
    }
    render() {
        const { messages, isLoading } = this.state

        return (
        <section className="template">
            <h2 className="template_title">testimonials</h2>    
            {isLoading && <div className="articles-wrap">Loading...</div>}
            {Array.isArray(messages) && <Messages data={messages} />}
            {!isLoading && <Add onAddMessages={this.handleAddMessages} />}
       </section>    
        )
    } 
}