import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'featrues/Auth/userSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {

       try {
        values.username =values.email;

        const action = register(values);
        const resulAction = await dispatch(action);
        const user = unwrapResult(resulAction);

        const {closeDialog} = props;
        if(closeDialog){
            closeDialog();
        }

        enqueueSnackbar('Register successfully! ', {variant: 'success'});
       } catch (error) {
        console.log('Failed to register:', error);
        enqueueSnackbar(error.message, {variant: 'error'});
           
       }
    }
    return (
        <div>
            <RegisterForm onSubmit = {handleSubmit} />
        </div>
    );
}

export default Register;