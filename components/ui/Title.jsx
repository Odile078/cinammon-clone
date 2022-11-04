const Title = ({tagName,text,variant}) => {
    const TagName=tagName
    return (
        <h2 className={" title " + variant}>
            {text}
        </h2>
    );
}

export default Title;