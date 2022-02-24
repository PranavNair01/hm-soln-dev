import { configureStore } from '@reduxjs/toolkit';

import colorSlice from './ColorSlice';

const Store = configureStore(
    {
        reducer: { color: colorSlice.reducer },
    }
)

export default Store;