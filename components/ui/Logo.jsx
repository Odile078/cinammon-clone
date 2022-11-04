import Image from "next/image";

const Logo = ({image}) => {
    return (
        <div>
            <Image className="w-40 h-5 logo" width='351' height="45" alt="Logo" src={image}/>
        </div>
                
    );
}

export default Logo;