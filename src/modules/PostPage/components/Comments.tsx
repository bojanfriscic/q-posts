import { FC, useState, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../../core/store/hooks';
import { getComments } from '../../../core/store/thunks/commentsThunk';
import { REQUEST_STATUS } from '../../../core/enums/requestStatus';
import { IComment } from '../../../core/interfaces/IComment';
import { Loading } from '../../../shared/components/Loading';
import { Error } from '../../../shared/components/Error';
import { Comment } from './Comment';
import commentsComponent from '../scss/Comments.module.scss';

interface ICommentsProps {
    id: number;
}

const Comments: FC<ICommentsProps> = props => {
    const { id } = props;
    const comments = useAppSelector(state => state.comments);
    const dispatch = useAppDispatch();
    const { data, status, error } = comments;
    const [postComments, setPostComments] = useState<Array<IComment>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const findPostComments = useCallback(() => {
        const tempPostComments = data.filter(comment => comment.postId === id);
        setPostComments(tempPostComments);
    }, [data, id]);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);

        switch (status) {
            case REQUEST_STATUS.INACTIVE: {
                dispatch(getComments());
                break;
            }
            case REQUEST_STATUS.PENDING: {
                setIsLoading(true);
                break;
            }
            case REQUEST_STATUS.FULFILLED: {
                findPostComments();
                setIsLoading(false);
                break;
            }
            case REQUEST_STATUS.REJECTED: {
                setHasError(true);
                setIsLoading(false);
                break;
            }
            default:
                return;
        }
    }, [dispatch, findPostComments, data, status]);

    const renderLoading = isLoading && <Loading message={'comments'} />;

    const renderError = !isLoading && hasError && <Error message={error} />;

    const renderComments = !isLoading && !hasError && postComments.length > 0 && (
        postComments.map(comment => <Comment key={comment.id} {...comment} />)
    );

    const renderNoComments = !isLoading && !hasError && postComments.length === 0 && (
        <Error message={'This post has no comments.'} />
    );

    return (
        <section>
            <h2 className={commentsComponent.heading}>
                Comments
            </h2>
            {renderLoading}
            {renderError}
            {renderComments}
            {renderNoComments}
        </section>
    );
};

export { Comments }