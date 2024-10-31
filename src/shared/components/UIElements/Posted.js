import React from 'react';
import { Link } from 'react-router-dom';


import './Posted.css';
import Card from '../UIElements/Card';
import Avatar from '../UIElements/Avatar';

const Posted = props => {

    return (
        <div className="posted-div">
            <Card className="post-item__content">
                <div className="posted-item">
                    <div className="user-item__image">
                        <Avatar image={'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={props.name} />
                    </div>
                    <div className="intro-text">
                        <p className="category-text font-weight-bold">d/category<span className="font-weight-light"> - 8 hr. ago</span></p>
                        <p className="userName">Max Schwarz</p>
                    </div>
                </div>
                <hr></hr>

                <h5 className="posted-title">This I don't agree with.. See evidence and counter argument below.</h5>
                <div className="img-vid-container">
                    <img src="/images/room.jpg" alt="A Room"></img>
                </div>
                <p className="post-passage">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis a"</p>
                <hr></hr>

                <div className="posted-option-icons">

                    <div className="icon-shade text-center p-2">
                        <Link><i class="text-success p-icon-p fa fa-arrow-circle-o-up mx-2"></i></Link>
                        <h3>133</h3>
                        <Link><i class="text-danger p-icon-p fa fa-arrow-circle-o-down mx-2"></i></Link>
                    </div>
                    <div className="icon-shade mt-2 text-center"><Link><i class="p-icon-pc fa fa-comment"></i></Link></div>
                    <h3 className="number-comments mr-1">54</h3>
                    <div className="icon-shade mt-2 ml-3 text-center"><Link><i class="p-icon-p fa fa-share"></i></Link></div>
                    <h3 className="share mr-1   ">Share</h3>
                </div>



            </Card >
        </div >
    )
}


export default Posted