type Props = {icon: string, text: string, onClick?: () => void};

const Button = ({icon, text, onClick}: Props) => {
    return (
        <li className="sidebar__buttons-item" onClick={onClick}>
            <div className="sidebar__buttons-icon">
                <img src={icon} alt={text} />
            </div>
            <p className="sidebar__buttons-text">{text}</p>
        </li>
    );
}

export default Button;
