import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from '../Layout';

const QueryProvider: FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Layout />
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
};

export default QueryProvider;