import React from 'react';
import Aside from './main_components/aside';
import Home from './main_components/home';
import Services from './main_components/services';
import About from './main_components/about';
import News from './main_components/news';
import Testimonials from './main_components/testimonials';
import NotFound from './main_components/notFound';
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