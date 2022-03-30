import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/forn-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCardForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCardForm({onSubmit = null}) {
  const schema = yup.object().shape({
    quantity: yup.number()
    .required('Please enter quantity')
    .min(1, 'Please enter at least 1')
    .typeError('Please enter number'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form} />

        <Button type="submit" variant="contained" color="primary" style={{width: '250px'}} size="large">
          ADD TO CART
        </Button>
      </form>
    </>
  );
}

export default AddToCardForm;
