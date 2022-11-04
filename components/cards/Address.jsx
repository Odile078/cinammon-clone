import Description from "../ui/Description";
import Title from "../ui/Title";

const Address = ({title, description,titleTag, titleVariant, descriptionVariant}) => {
    return (
        <div className="address-card">
            <Title tagName={titleTag} variant={titleVariant} text={title}/>
            <Description variant={descriptionVariant} text={description}/>
                      
        </div>
    );
}

export default Address;