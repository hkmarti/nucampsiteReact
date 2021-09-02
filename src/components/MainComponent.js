import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

//Notes: Need to use arrow function instead of function declaration for <Home...> //
//That's because arrow functions inherit the THIS of their parent scope. //

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites ={this.state.campsites}/>} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
//If passing along state data, use the render method like with Directory. 
//If you're not passing state data, use component={NameOfComponent}
//Make sure to put all Routes BEFORE the Redirect tag otherwise they won't work.


export default Main;
