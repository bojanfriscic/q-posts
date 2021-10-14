import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../enums/RoutesEnum';
import { PostsPage } from '../../../pages/PostsPage';
import { SinglePostPage } from '../../../pages/SinglePostPage';
import { ErrorPage } from '../../../pages/ErrorPage';

const Routes: FC = () => {
    return (
        <Switch>
            <Route 
                exact
                path={ROUTES.BASE_URL}
                render={() => <Redirect to={ROUTES.POSTS} />}
            />
            <Route
                exact
                path={ROUTES.POSTS}
                render={() => <PostsPage />}
            />
            <Route 
                path={`${ROUTES.SINGLE_POST}/:id`}
                render={() => <SinglePostPage />}
            />
            <Route
                path={ROUTES.ERROR}
                render={() => <ErrorPage />}
            />
            <Route
                render={() => <Redirect to={ROUTES.ERROR} />}
            />
        </Switch>
    );
};

export default Routes;