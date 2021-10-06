import { useEffect, useState } from 'react';

const useFetch = <T>(apiUrl: string) => {
    const [data, setData] = useState<Array<T>>([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [apiUrl]);

    return [data];
};

export { useFetch };