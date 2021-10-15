import { FC, useContext, useState, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router';
import { DataContext } from '../../../core/context/DataContext';
import { ISinglePostRouteParams } from './interfaces/ISinglePostRouteParam';
import { IComment } from '../../../core/interfaces/IComment';
import { QUERY_KEYS } from '../../../core/enums/QueryKeysEnum';
import { SinglePostPageUI } from './components/SinglePostPageUI';

const SinglePostPage: FC = () => {
    const { id } = useParams<ISinglePostRouteParams>();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [hasPostError, setHasPostError] = useState(false);
    const [comments, setComments] = useState<Array<IComment>>([]);
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [hasCommentsError, setHasCommentsError] = useState(false);

    const queryClient = useQueryClient();
    const context = useContext(DataContext);
    const { data } = context;

    useEffect(() => {
        setIsCommentsLoading(true);
        setIsPostLoading(true);
        setHasPostError(false);
        setHasCommentsError(false);

        if (data && data.length > 0) {
            const currentPost = data.find(post => post.id === +id);

            if (currentPost) {
                const { title, body, author } = currentPost;

                setTitle(title);
                setBody(body);
                setAuthor(author);
            } else {
                setHasPostError(true);
            }

            setIsPostLoading(false);
        }

        const cachedComments: Array<IComment> | undefined = queryClient.getQueryData(QUERY_KEYS.COMMENTS);

        if (cachedComments && cachedComments.length > 0) {
            const tempComments = cachedComments.filter(comment => comment.postId === +id);

            if (tempComments.length > 0) {
                setComments(tempComments);
            } else {
                setHasCommentsError(true);
            }

            setIsCommentsLoading(false);
        }

    }, [data, id, queryClient]);

    const propsData = {
        title,
        body,
        author,
        comments,
        isPostLoading,
        hasPostError,
        isCommentsLoading,
        hasCommentsError
    };

    return (
        <SinglePostPageUI {...propsData} />
    );
};

export default SinglePostPage;