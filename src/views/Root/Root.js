import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import TwittersView from '../TwittersView/TwittersView';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateArrray = [
        {
        image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://avatars0.githubusercontent.com/u/92839?s=460&v=4',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://avatars0.githubusercontent.com/u/1500684?v=4',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    }, 
]

class App extends React.Component {
    state = {
        items: [...initialStateArrray],
        isModalOpen: false,
    }

    addItem = e => {
        e.preventDefault()

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));


        e.target.reset();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        return (
            <BrowserRouter>
            <>
            <Header openModalFn={this.openModal} />
                <Switch>
                    <Route exact path="/" component={TwittersView} />
                    <Route path="/articles" component={ArticlesView} />
                    <Route path="/notes" component={NotesView} />
                </Switch>
                { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
                </>
            </BrowserRouter>
        );
    }
    
};
export default App;