const Button = ({text,variant}) => {
    return (
        <button className={" button button--zoom-in "+variant}>{text}
        </button>
    );
}

export default Button;