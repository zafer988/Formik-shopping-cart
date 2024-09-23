import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../productRequest/ProductFetch';
import addReducer from '../addSlice/Add';
import removeReducer from '../removeSlice/Remove'
const store = configureStore({
    reducer: {
        product: productReducer,
        add: addReducer,
        remove: removeReducer



    }
})
export default store