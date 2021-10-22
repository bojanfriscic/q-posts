import { FC } from 'react';
import { Provider } from 'react-redux';
import { Layout } from '../Layout';
import { store } from '../../store';

const StoreProvider: FC = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

export default StoreProvider;