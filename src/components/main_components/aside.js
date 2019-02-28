import React from 'react';

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

export default Aside;