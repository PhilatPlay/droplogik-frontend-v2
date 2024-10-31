import React from 'react';

import Input from '../FormElements/Input';
import Button from '../FormElements/Button';
import DragDrop from '../FormElements/DragDrop'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../../shared/util/validators';
import { useForm } from '../../../shared/hooks/form-hook';
import './PostForm.css';
import TextArea from '../FormElements/TextArea';

const PostForm = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );

    // const clip = (<i className="p-icon fa fa-paperclip"></i>)

    const postSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };

    const cancelPost = props => {
        let postInvite = document.getElementById("postInvite")
        let postForm = document.getElementById("postForm")

        postInvite.classList.remove("hideForTheMoment");
        postForm.classList.add("hideForTheMoment");
    }
    return (
        <form id="postForm" className="hideForTheMoment" onSubmit={postSubmitHandler}>
            <div className="post-form">
                <p className="font-weight-bold mb-2">Post to d/category</p>

                <div className="input-display">
                    <i class="p-icon fa fa-plus-square"></i>
                    <Input
                        id="title"
                        element="input"
                        type="text"
                        label="Title"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid title."
                        onInput={inputHandler}
                        placeholder='Title.'
                    />
                </div>
                <div className="input-display">
                    <i className="p-icon fa fa-comment"></i>
                    <TextArea
                        id="on-your-mind"
                        element="textarea"
                        label="Description"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid description (at least 5 characters)."
                        onInput={inputHandler}
                        placeholder="Convince us."
                    />
                </div>
                <div className="input-display">
                    <i class="p-icon fa fa-link"></i>
                    <Input
                        id="link-upload"
                        element="input"
                        label="Address"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid address."
                        onInput={inputHandler}
                        placeholder='Link.'
                    />
                </div>
                <div className="input-display">
                    <i className="p-icon fa fa-paperclip"></i>
                    <Input
                        id="link-upload"
                        element="input"
                        label="Address"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid address."
                        onInput={inputHandler}
                        placeholder="Doc"
                    />

                </div>
                <DragDrop
                    id="link-upload"
                    element="input"
                    label="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                    onInput={inputHandler}
                    placeholder="Doc" />
            </div>
            <div className="button-space">
                <Button type="submit" disabled={!formState.isValid}>
                    Comment
                </Button>
                <Button onClick={cancelPost}>
                    Cancel
                </Button>
            </div>
        </form>

    );
};

export default PostForm;