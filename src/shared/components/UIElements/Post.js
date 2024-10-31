import React from 'react';
import { Link } from 'react-router-dom';


import './Post.css';
import Card from '../UIElements/Card';
import Avatar from '../UIElements/Avatar';

const Post = props => {

    const goToPost = props => {
        let postInvite = document.getElementById("postInvite")
        let postForm = document.getElementById("postForm")

        postInvite.classList.add("hideForTheMoment");
        postForm.classList.remove("hideForTheMoment");
    }

    return (
        <div id="postInvite" className="post-div" onClick={goToPost}>
            <Card className="post-item__content">
                <div className="post-item">
                    <div className="user-item__image">
                        <Avatar image={'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt={props.name} />
                    </div>
                    <div className='post'>
                        <input className='search-input text-muted' type='search' placeholder='Phil, convince us.'></input>
                    </div>
                </div>
                <hr></hr>
                <div className="post-options">
                    <div>
                        Post
                        <Link><span>Comment</span></Link>
                        <span> | </span>
                        <Link><span>Valid Argument</span></Link>
                    </div>
                    <div className="post-option-icons">
                        <Link><i class="p-icon fa fa-video-camera"></i></Link>
                        <Link><i class="p-icon fa fa-picture-o"></i></Link>
                        <Link><i class="p-icon fa fa-paperclip"></i></Link>
                        <Link><i class="p-icon fa fa-link"></i></Link>
                    </div>
                </div>


            </Card>
        </div >
    )
}


export default Post