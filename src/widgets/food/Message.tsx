import { FC } from 'react';
type Props = {text: string};

const Message: FC<Props> = ({text}): JSX.Element => {
    return (
        <div className="message">
            <p className="message__text">{text}</p>
        </div>
    );
} 

export default Message;