import React from 'react';

import './HomePage.css';
import Messenger from './Messenger.js';
import UsersList from '../user/components/UsersList.js';
import NavLinks from '../shared/components/Navigation/NavLinks';
import Post from '../shared/components/UIElements/Post';
import PostForm from '../shared/components/UIElements/PostForm';
import Posted from '../shared/components/UIElements/Posted';


const USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 1
    },
    {
        id: 'u1',
        name: 'Susan Betts',
        image:
            'images/sampleCandidate1.png',
        places: 2
    },
    {
        id: 'u1',
        name: 'Ben Johnson',
        image:
            'images/sampleCandidate2.png',
        places: 1
    },
    {
        id: 'u1',
        name: 'Philip Jenkins',
        image:
            'images/meNow.png',
        places: 1
    },
    {
        id: 'u1',
        name: 'Ruby Vincent',
        image:
            'images/sampleCandidate3.png',
        places: 2
    }
    // ,{
    //     id: 'u1',
    //     name: 'Max Schwarz',
    //     image:
    //         'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //     places: 6
    // },
    // {
    //     id: 'u1',
    //     name: 'Max Schwarz',
    //     image:
    //         'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //     places: 7
    // }
];

const HomePage = props => {
    return (

        <div className='row site-background'>
            <div className='col-sm-0 col-md-0 col-lg-3 col-xl-3 left-menu'>
                <NavLinks />
            </div>
            <div className='col-sm-8 col-md-8 col-lg-6 col-xl-6 center-content'>
                <Post />
                <PostForm />
                <Posted />
            </div>

            <div className='col-sm-4 col-md-4 col-lg-3 col-xl-3 right-panel'>
                <div className="fixed-right-panel">
                    <div className="most-active">
                        <p>Currently Holding Debates</p>
                        <UsersList items={USERS} />
                    </div>
                </div>
            </div>
            <Messenger />
            {/* <div className="row message-window">
                <div className="message-win-left col-4">
                    <div className="row message-left-header">
                        <p>Chats</p>
                        <div>
                            <i class="fa fa-plus-square-o"></i>
                        </div>
                    </div>
                </div>
                <div className="message-win-right col-8">
                    <div className="row message-right-header">
                        <p>Create Chat</p>
                        <div className="create-chat-side">
                            <i class="fa fa-expand"></i>
                            <i class="fa fa-angle-down mx-3"></i>
                            <i class="fa fa-times ml-3 close-icon-x text-dark"></i>
                        </div>
                    </div>
                    <form>
                        <div className='usernames'>
                            <textarea className='username-input text-muted' type='search' rows="1" placeholder='... add one or more usernames'></textarea>
                        </div>
                    </form>
                </div>

            </div> */}
        </div>

    )
}

export default HomePage;