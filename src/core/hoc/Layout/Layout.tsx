import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../Routes';
import { Container } from '../Container';
import { useDispatch } from 'react-redux'
// import { getUsers } from '../../store/thunks/usersThunk';
// import { getPosts } from '../../store/thunks/postsThunk';
import { getComments } from '../../store/thunks/commentsThunk';
import { Header } from '../../components/Header';

const Layout: FC = () => {
    const dispatch = useDispatch();
    dispatch(getComments());
    // const users = useSelector(state => state);

    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes />
                </Container>
            </main>
        </Router>
    );
};

export default Layout;