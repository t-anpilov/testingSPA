import React from 'react'
import Messages from './messages'
import Add from './main_components/add'

export default class Testimonials extends React.Component {
    state = {
        messages: null,
        isLoading: false,
    }
    static getDerivedStateFromProps(props, state) {
        let nextFilteredAdds

        if (Array.isArray(state.messages)) {
            nextFilteredAdds = [...state.messages]
        
            nextFilteredAdds.forEach((item, index) => {
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
            {isLoading && <div className="articles-wrap">Loading...</div>}
            {Array.isArray(messages) && <Messages data={messages} />}
            <Add onAddMessages={this.handleAddMessages} />
        </section>    
        )
    } 
}