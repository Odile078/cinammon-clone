import Image from "next/image";
import Description from "../ui/Description";
import Title from "../ui/Title";

const ServiceCard = ({image, title ,description}) => {
    return (
        <div className="service">
            <Image alt="" src={image} height="48" width="48" className="service__img"/>
            <div className="service__title">
                <Title text={title} variant=" title--size-medium title--color-secondary " tagName="h2" />
            </div>
            <Description text={description} variant=" description--color-secondary "/>
        </div>
    );
}

export default ServiceCard;