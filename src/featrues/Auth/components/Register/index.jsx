import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'featrues/Auth/userSlice';

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {

       try {
        values.username =values.email;

        const action = register(values);
        const resulAction = await dispatch(action);
        const user = unwrapResult(resulAction);
        console.log('New user', user);
       
       } catch (error) {
        console.log('Failed to register:', error)
           
       }
    }
    return (
        <div>
            <RegisterForm onSubmit = {handleSubmit} />
        </div>
    );
}

export default Register;