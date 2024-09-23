import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../productRequest/ProductFetch'
import React from 'react';
import { Card, Spin } from 'antd';
import { add } from '../addSlice/Add';
const { Meta } = Card;
const Product = () => {
    const products = useSelector((state) => state.product.data);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 500)
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    const productCards = products.map((item) => (
        <div className='col-md-3'>
            <Card className='product-card'
                key={item.id}
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt={item.title} src={item.image} />}>
                <Meta title={item.title} description={item.description} style={{ textAlign: 'left', fontFamily: 'cursive' }} />
                <button className='btn btn-primary' onClick={() => dispatch(add(item))}>Add to cart</button>
            </Card>
        </div>


    ));
    return (
        <Spin spinning={loading} tip='Loading...' size='large' style={{ height: '100vh' }}>
            <div className='row'>
                <h1 className='text-center' style={{ fontFamily: 'cursive' }}>Products</h1>
                {productCards}
            </div>
        </Spin>
    );
}

export default Product;
