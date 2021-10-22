import { TRequestStatus } from "../types/TRequestStatus";

export interface IInitialState<T> {
    data: Array<T>;
    status: TRequestStatus;
    error: null | string;
};