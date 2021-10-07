import { ReactNode } from 'react';
import { useLogger } from '../../hooks/useLogger';

interface ITitleComponent {
    content: ReactNode;
    level: number;
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title = (props: ITitleComponent) => {
    const { content, level } = props;
    const Tag = `h${level}` as HeadingTag;
    useLogger({componentName: 'Title'});

    return (
        <Tag>{content}</Tag>
    );
};

export default Title;