import {configureStore} from '@reduxjs/toolkit'
const correctStore = configureStore({
    reducer:{

    }
});

export type RootState = ReturnType<typeof correctStore.getState>;
export type AppDispatch = typeof correctStore.dispatch;

export default correctStore;