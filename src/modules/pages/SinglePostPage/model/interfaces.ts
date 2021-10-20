import { ChangeEvent, FormEvent } from 'react';
import { IComment } from '../../../../core/interfaces/IComment';
import { IUser } from '../../../../core/interfaces/IUser';

export interface ISinglePostRouteParams {
    id: string;
};

export interface ISinglePostContext {
    id: number | null;
    title: string;
    body: string;
    author: string;
    userId: number | null;
    users: Array<IUser>;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleUpdatePostData: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCloseMessage: (s: string) => void;
    isEditMode: boolean;
    setIsEditMode: (b: boolean) => void;
};

export interface ISinglePostPageProps {
    id: number;
    comments: Array<IComment>;
    isPostLoading: boolean;
    hasPostError: boolean;
    isCommentsLoading: boolean;
    hasCommentsError: boolean;
    isPostSubmitting: boolean;
    isSubmittingFailure: boolean;
    isSubmittingSuccess: boolean;
};