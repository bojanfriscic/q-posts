import styles from './scss/Loading.module.scss';

interface ILoadingProps {
    name?: string;
}

const Loading = (props: ILoadingProps) => {
    const { name } = props;
    const { loadingComponent } = styles;

    const renderLoadingString = name 
        ? `Loading the ${name}...`
        : 'Loading...'

    return <div className={loadingComponent}>{renderLoadingString}</div>;
};

export default Loading;