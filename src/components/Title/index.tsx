import { ReactNode } from 'react'

interface ITitleComponent {
    content: ReactNode;
    level: number;
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title = (props: ITitleComponent) => {
    const { content, level } = props;
    const Tag = `h${level}` as HeadingTag

    return (
        <Tag>{content}</Tag>
    );
};

export default Title;