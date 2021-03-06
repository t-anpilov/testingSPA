import React from 'react'
import Navigation from './home_components/navigation'
import navData from '../../data/navData'

export default class Home extends React.Component {
    render() {
        return (
            <section className="template">
                <Navigation data={navData} />
            </section>
        )
    }
}