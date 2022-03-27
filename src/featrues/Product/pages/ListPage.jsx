import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination:{
    display: 'flex',
    flexFlow:'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '10px',
  }
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fecth product list: ', error);
      }
      setLoading(false);
    })();
  }, [filters]);
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  onChange={handlePageChange}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
