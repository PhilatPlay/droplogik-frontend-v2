import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../shared/components/UIElements/Avatar';
import Card from '../shared/components/UIElements/Card';
import './ConversationItem.css';

const ConversationItem = props => {
    return (
        <li className="con-item">
            <Card className="con-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="con-item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="con-item__info">
                        <h2>{props.name}</h2>
                        <p>2d ago</p>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default ConversationItem;