import React from 'react';

import ConversationItem from './ConversationItem';
import Card from '../shared/components/UIElements/Card';
import './ConversationList.css';

const ConversationList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="con-list">
            {props.items.map(user => (
                <ConversationItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );
};

export default ConversationList;