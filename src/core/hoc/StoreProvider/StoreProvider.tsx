import { FC } from 'react';
import { Provider } from 'react-redux';
import { QueryProvider } from '../QueryProvider';
import { Layout } from '../Layout';
import { store } from '../../store';

const StoreProvider: FC = () => {
    return (
        <Provider store={store}>
            <QueryProvider>
                <Layout />
            </QueryProvider>
        </Provider>
    );
};

export default StoreProvider;