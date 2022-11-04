import Image from "next/image";
import Link from "next/link";

const ProductCard = ({image,description,title,subTitle,categories,variant}) => {
    
    return (
        <div className="product">
            <Link href="/">
                <div className={" product__img-container "+ variant}>
                    <Image className="product__img" width='1920' height="888" alt="Mockup" src={image}/>
                </div>
            </Link>     
            <div className="product__body">
                <ul className="product__category-list">
                    {categories.map((category, index) =>
                    <li key={index} className="product__category-item">{category??''}</li>
                    )}
                    
                </ul>
                <Link href="/" className="product__title-link">
                    <h3 className="product__title">{title??''}<br/>{subTitle??''}</h3>
                </Link>
                <p className="product__description">{description??''}</p>
            </div>      
        </div>
    );
}

export default ProductCard;