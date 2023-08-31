import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from './cart.module.css'


const ShoppingCart = () => {
    const {cartlist}=useSelector(state=>state.cartlist);
  return <div className={styles.grid}>
    {cartlist?.map(row=>{
        return <>
            <div>{row.title} </div> <div>{row.description} </div><div>{row.price} </div>
        </>
    })}
    </div>
}

export default ShoppingCart