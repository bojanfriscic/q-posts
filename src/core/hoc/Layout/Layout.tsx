import { FC } from 'react';
import { useDispatch } from 'react-redux'
// import { getUsers } from '../../store/thunks/usersThunk';
// import { getPosts } from '../../store/thunks/postsThunk';
import { getComments } from '../../store/thunks/commentsThunk';

const Layout: FC = () => {
    const dispatch = useDispatch();
    dispatch(getComments());
    // const users = useSelector(state => state);

    return (
        <main>
            layout
        </main>
    );
};

export default Layout;