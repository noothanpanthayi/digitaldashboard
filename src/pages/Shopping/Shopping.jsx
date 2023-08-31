import React, { Fragment, useEffect, useState } from 'react'
import styles from './shopping.module.css'
import { useDispatch } from 'react-redux'
import { setCartList } from '../../redux/slices/cartlist'
import { useGetProductsQuery } from '../../redux/api/productsapi';

const Shopping = () => {
  const dispatch = useDispatch()

const {data, loading, error} =useGetProductsQuery();

  const addToCart = (item) => {
    dispatch(setCartList(item))
  }

  const Grid = () => {
    return (
      <>
      {error&&<div>error</div>}
      {loading&&<div>Loading...</div>}
        <div className={styles.grid}>
          {data?.products?.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className={styles.card}>
                  <div title={item.title} className={styles.header}>
                    {item.title.substr(0, 15)}
                    {item.title.length > 15 && '...'}
                  </div>
                  <div>
                    <img
                      className={styles.image}
                      alt="products"
                      src={item.images[0]}
                    />
                  </div>
                  <div className={styles.price}>Price:{item.price}</div>
                  <div className={styles.footer}>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </>
    )
  }
  return (
    <>
      <Grid />
    </>
  )
}

export default Shopping
