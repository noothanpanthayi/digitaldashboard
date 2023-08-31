import React, { Fragment, useEffect, useState } from 'react'
import useFetch from '../../hooks/usefetch'
import styles from './shopping.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCartList } from '../../redux/slices/cartlist'

const Shopping = () => {
  const dispatch = useDispatch()

  const { data, loading, error, errorMsg } = useFetch(
    'https://dummyjson.com/products',
  )

  const [state, setState] = useState({
    cart: [],
  })

  const addToCart = (item) => {
    const tempState = { ...state }
    tempState.cart = [...tempState.cart, item]
    setState((prevState) => {
      return {
        cart: tempState.cart,
      }
    })

    dispatch(setCartList(item))
  }

  const Grid = () => {
    return (
      <>
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
      <div>Shopping</div>
      <Grid />
    </>
  )
}

export default Shopping
