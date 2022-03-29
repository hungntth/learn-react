import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Fillters/FilterByCategory';
import FilterByPrice from './Fillters/FilterByPrice';
import FilterByService from './Fillters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId,newCategoryName) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
      'category.name': newCategoryName,
    };
    onChange(newFilters);
  };

  const handeChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handeChange} />
      <FilterByService filters={filters} onChange={handeChange} />
    </Box>
  );
}

export default ProductFilters;
