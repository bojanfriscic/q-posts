import { FC, useContext, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useParams } from 'react-router';
import { api } from '../../../core/api';
import { DataContext } from '../../../core/context/DataContext';
import { ISinglePostRouteParams } from './model/ISinglePostRouteParam';
import { IComment } from '../../../core/interfaces/IComment';
import { IUser } from '../../../core/interfaces/IUser';
import { QUERY_KEYS } from '../../../core/enums/QueryKeysEnum';
import { MESSAGE_TYPE } from './model/enums';
import { SinglePostPageUI } from './components/SinglePostPageUI';

const SinglePostPage: FC = () => {
    const { id } = useParams<ISinglePostRouteParams>();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState<number | null>(null);
    const [author, setAuthor] = useState('');
    const [users, setUsers] = useState<Array<IUser>>([])
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [hasPostError, setHasPostError] = useState(false);
    const [comments, setComments] = useState<Array<IComment>>([]);
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [hasCommentsError, setHasCommentsError] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false);
    const [isSubmittingFailure, setIsSubmittingFailure] = useState(false);

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
                const { title, body, userId, author } = currentPost;

                setTitle(title);
                setBody(body);
                setUserId(userId)
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

        const cachedUsers: Array<IUser> | undefined = queryClient.getQueryData(QUERY_KEYS.USERS);

        if (cachedUsers && cachedUsers.length > 0) {
            setUsers(cachedUsers);
        }

    }, [data, id, queryClient]);

    const { isLoading: isPostSubmitting, mutate } = useMutation(api.putPost, {
        onSuccess: (data) => {
            setIsSubmittingSuccess(true);
            setIsEditMode(false);
            console.log(data);
        },
        onError: () => {
            setIsSubmittingFailure(true);
            console.error('Error - Your post could not be updated');
        }
    });

    const handleUpdatePostData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        switch(name) {
            case 'title':
                setTitle(value);
                break;
            case 'body':
                setBody(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmittingSuccess(false);
        setIsSubmittingFailure(false);

        mutate({ id: parseInt(id), userId, title, body });
    };

    const handleCloseMessage = (id: string) => {
        switch(id) {
            case MESSAGE_TYPE.SUCCESS:
                setIsSubmittingSuccess(false);
                break;
            case MESSAGE_TYPE.FAILURE:
                setIsSubmittingFailure(false);
                break;
            default:
                return;
        }
    }

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const userId = +e.target.value;
        setUserId(userId);
    };

    const propsData = {
        id: +id,
        title,
        body,
        userId,
        setUserId,
        author,
        comments,
        users,
        isPostLoading,
        hasPostError,
        isCommentsLoading,
        hasCommentsError,
        isEditMode,
        setIsEditMode,
        handleUpdatePostData,
        handleSubmit,
        isPostSubmitting,
        isSubmittingFailure,
        isSubmittingSuccess,
        handleCloseMessage,
        handleOnChange
    };

    return (
        <SinglePostPageUI {...propsData} />
    );
};

export default SinglePostPage;