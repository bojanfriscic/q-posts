import { useState, useContext } from 'react';
import { ISinglePostPageProps  } from '../model/interfaces';
import { SinglePostContext } from '../context/SinglePostContext';
import { PostContent } from './PostContent';
import { EditModeToggle } from './EditModeToggle';
import { PostEditForm } from './PostEditForm';
import { SubmittingSuccess } from './SubmittingSuccess';
import { SubmittingFailure } from './SubmittingFailure';
import { Loading } from '../../../../shared/components/Loading';
import { Error } from '../../../../shared/components/Error';
import { Comment } from '../../../../shared/components/Comment';
import { AddComment } from '../../../../shared/components/AddComment';
import singlePostPage from '../scss/SinglePostPage.module.scss';

const SinglePostPageUI = (props: ISinglePostPageProps) => {
    const [showAddForm, setShowAddForm] = useState(false);

    const context = useContext(SinglePostContext);
    const { isEditMode } = context;

    const { 
        id,
        comments,
        isPostLoading, 
        hasPostError,
        isCommentsLoading,
        hasCommentsError,
        isPostSubmitting,
        isSubmittingFailure,
        isSubmittingSuccess,
    } = props;
    
    const renderPostLoading = isPostLoading && <Loading name='Post' />
    const renderPostError = !isPostLoading && hasPostError && <Error />;
    const renderPost = !isPostLoading && !hasPostError && <PostContent />;

    const renderEditModeToggle = !isPostLoading && !hasPostError && <EditModeToggle />;
    const renderEditPost = !isPostLoading && !hasPostError && !isPostSubmitting && <PostEditForm />

    const renderSubmittingMessage = isPostSubmitting && <p>Saving your changes...</p>;
    const renderSuccess = isSubmittingSuccess && <SubmittingSuccess />;
    const renderFailure = isSubmittingFailure && <SubmittingFailure />;

    const addCommentProps = {
        setShowAddForm,
        postId: id
    };
    const renderAddForm = showAddForm && <AddComment {...addCommentProps} />;
    const addButtonLabel = showAddForm ? 'Cancel' : 'Add Comment';

    const renderCommentsLoading = isCommentsLoading && <Loading name='Comments' />;
    const renderCommentsError = !isCommentsLoading && hasCommentsError && <Error />;
    const renderComments = !isPostLoading && !hasCommentsError && comments.map(comment => <Comment key={comment.id} {...comment} />)

    return (
        <>
            <section>
                {renderEditModeToggle}
                {renderPostLoading}
                {renderPostError}
                {isEditMode ? renderEditPost : renderPost}
                {renderSubmittingMessage}
                {renderSuccess}
                {renderFailure}
            </section>
            <hr />
            <section>
                <h2 className={singlePostPage.commentsHeading}>
                    Comments 
                    <button onClick={() => setShowAddForm(!showAddForm)}>
                        {addButtonLabel}
                    </button>
                </h2>

                {renderAddForm}
                {renderCommentsLoading}
                {renderCommentsError}
                {renderComments}
            </section>
        </>
    );
};

export { SinglePostPageUI };