import { Switch, Route, Redirect } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import PostsPage from '../../pages/PostsPage';
import SinglePostPage from '../../pages/SinglePostPage';
import FourOFourPage from '../../pages/FourOFourPage';

const Routes = () => {
    useLogger({ componentName: 'Routes' });

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/posts" />
                </Route>
                <Route exact path="/posts">
                    <PostsPage />
                </Route>
                <Route path="/post/:id">
                    <SinglePostPage />
                </Route>
                <Route path="/404">
                    <FourOFourPage />
                </Route>
                <Route>
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </main>
    );
};

export default Routes;