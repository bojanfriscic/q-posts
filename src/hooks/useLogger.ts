import { useContext, useEffect } from 'react'
import LoggerContext from '../context/LoggerContext';

interface IUseLoggerHook {
    componentName: string;
}

const useLogger = (props: IUseLoggerHook) => {
    const { componentName } = props;
    const { helloMessage } = useContext(LoggerContext);

    useEffect(() => {
        console.log(`%c${helloMessage} from ${componentName}`, 'font-weight: 700');
    }, [helloMessage, componentName])
}

export { useLogger };