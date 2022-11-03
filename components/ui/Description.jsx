const Description = ({text,variant}) => {
    return (
        <p className={"description"+ variant}>{text}</p>
    );
}

export default Description;