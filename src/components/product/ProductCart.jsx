import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../removeSlice/Remove'
import { Alert, Card } from 'antd';

const { Meta } = Card;
const ProductCart = () => {
    const productCards = useSelector(store => store.remove)
    const dispatch = useDispatch();
    const removeCard = (id) => {
        dispatch(remove(id))
    }
    const cartItem = productCards.map((item) => (
        <div className='col-md-3' key={item.id}>
            <Card className='product-card'
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt={item.title} src={item.image} />}>
                <Meta title={item.title} description={item.description} style={{ textAlign: 'left', fontFamily: 'cursive' }} />
                <button className='btn btn-danger' onClick={() => removeCard(item.id)}>Remove from cart</button>
            </Card>
        </div>
    ));
    if (productCards.length === 0) {
        return (
            <Alert message="Your cart is empty" type="info" />
        )
    }
    return (
        <>
            <div className='row'>
                {cartItem}
            </div>
        </>
    )
}

export default ProductCart;
