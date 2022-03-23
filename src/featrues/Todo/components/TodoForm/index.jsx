import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/forn-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
// import InputField from '../../../../components/forn-controls/InputField';

const schema = yup.object().shape({
  title: yup.string()
  .required('Please enter title')
  .min(5, 'title is too short'),
}).required();


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
    
};

function TodoForm(props) {
    const form = useForm({
            defaultValues:{
                title: '',
            },
            resolver: yupResolver(schema),
    });

    const handleSubmit = (values) =>{
        console.log('TODO FORM: ',values);
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            Todo Form
            <InputField name="title" label="Todo" form = {form}/>
        </form>
    );
}

export default TodoForm;