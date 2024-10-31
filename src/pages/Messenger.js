import React, { useState } from 'react';


import ConversationList from '../conversations/ConversationList';
import './Messenger.css';



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
        name: 'Max Schwarz',
        image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 2
    },
    {
        id: 'u1',
        name: 'Max Schwarz',
        image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 3
    },
    {
        id: 'u1',
        name: 'Max Schwarz',
        image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 4
    },
    {
        id: 'u1',
        name: 'Max Schwarz',
        image:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 5
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

const Messenger = props => {
    let [opened, setOpened] = useState(true);

    const toggleMessenger = () => {
        let mess = document.getElementById("messengerDiv");
        if (opened) {
            mess.classList.add("hideForTheMoment");
            setOpened(false);
        } else {
            mess.classList.remove("hideForTheMoment");
            setOpened(true);

        }

    }
    return (

        <div id="messengerDiv" className="hideForTheMoment row message-window">
            <div className="message-win-left col-4">
                <div className="row message-left-header">
                    <p>Chats</p>
                    <div>
                        <i class="fa fa-plus-square-o"></i>
                    </div>
                </div>
                <ConversationList items={USERS} />
            </div>
            <div className="message-win-right col-8">
                <div className="row message-right-header">
                    <p>Create Chat</p>
                    <div className="create-chat-side">
                        <i class="fa fa-expand"></i>
                        <i class="fa fa-angle-down mx-3"></i>
                        <i class="fa fa-times ml-3 close-icon-x text-dark" onClick={toggleMessenger}></i>
                    </div>
                </div>
                <form>
                    <div className='usernames'>
                        <textarea className='username-input text-muted' type='search' rows="1" placeholder='... search users'></textarea>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Messenger;