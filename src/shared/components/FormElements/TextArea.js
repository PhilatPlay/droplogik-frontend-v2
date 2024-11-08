import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import './TextArea.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
};

const TextArea = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        (
            <textarea
                id={props.id}
                rows={props.rows || 5}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                placeholder={props.placeholder}
            />
        );

    return (
        <div
            className={`post-container mb-3 ${!inputState.isValid && inputState.isTouched &&
                'form-control--invalid'}`}>
            {/* <label htmlFor={props.id}>{props.label}</label> */}
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};

export default TextArea;
