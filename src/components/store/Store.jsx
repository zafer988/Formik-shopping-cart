import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../productRequest/ProductFetch';
import addReducer from '../features/Add';
import removeReducer from '../features/Remove'
const store = configureStore({
    reducer: {
        product: productReducer,
        add: addReducer,
        remove: removeReducer



    }
})
export default store