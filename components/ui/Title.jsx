const Title = ({tagName,text,variant}) => {
    return (
        <tagName className={" title " + variant}>
            {text}
        </tagName>
    );
}

export default Title;