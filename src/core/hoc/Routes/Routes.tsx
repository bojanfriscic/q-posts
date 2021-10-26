import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../enums/routes';
import { PostsPage } from '../../../modules/PostsPage';
import { PostPage } from '../../../modules/PostPage';
import { UserSelectPage } from '../../../modules/UserSelectPage';
import { ErrorPage } from '../../../modules/ErrorPage';

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
                exact
                path={`${ROUTES.SINGLE_POST}/:id`}
                render={() => <PostPage />}
            />
            <Route 
                exact
                path={ROUTES.USER_SELECT}
                render={() => <UserSelectPage />}
            />
            <Route 
                path={ROUTES.ERROR}
                render={() => <ErrorPage />}
            />
            <Route render={() => <Redirect to={ROUTES.ERROR} />} />
        </Switch>
    );
};

export default Routes;