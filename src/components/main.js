import React from 'react';
import Aside from './main_components/aside';
import Home from './main_components/home';
import Services from './services';
import About from './about';
import News from './news';
import Testimonials from './testimonials';
import NotFound from './notFound';
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