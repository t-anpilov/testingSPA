import React from 'react';
import Aside from '../components/main_components/aside';
import Home from '../components/home';
import Services from '../components/services';
import About from '../components/about';
import News from '../components/news';
import Testimonials from '../components/testimonials';
import NotFound from '../components/notFound';
import { Route, Switch  } from 'react-router-dom'
   
class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/about' component={About} />
                    <Route path='/news' component={News} />
                    <Route path='/testimonials' component={Testimonials} />
                    <Route path='*' component={NotFound} />
                    <Home />
                </Switch>    
                <Aside />
            </main>    
        )
    }
}

export default Main