import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../navigation/enums/RoutesEnum';

const ErrorPage: FC = () => {
    return (
        <section>
            <h1>There has been an error.</h1>
            <p>
                The page you're searching for doesn't exist. Return <Link to={ROUTES.BASE_URL}>home</Link>?
            </p>
        </section>
    )
};

export default ErrorPage;