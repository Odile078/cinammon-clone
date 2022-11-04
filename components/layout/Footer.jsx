import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Image from "next/image";
import Title from "../ui/Title";
import Description from "../ui/Description";
import Address from "../cards/Address";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="lg:mx-auto lg:container">
                <div className="footer__top-side">
                    <div className="footer__left">
                        <div className="footer__nav">
                            <Logo image={"/svgs/logo-white.97f0c2c8.svg"}/>
                            <h4 className="footer__title footer__title--mobile">
                            All software,<br/> zero bullshit.
                            </h4>
                            <ul className="footer__list">
                            <li><Link href="/" className=" footer__list-item footer__list-item--active">Home</Link></li>
                            <li><Link href="/projects" className=" footer__list-item">Projects</Link></li>
                            <li><Link href="/services" className=" footer__list-item">Services</Link></li>
                            <li><Link href="/about-us"className=" footer__list-item">About Us</Link></li>
                            <li><Link href="/careers"className=" footer__list-item">Careers</Link></li>
                            <li><Link href="/blog"className=" footer__list-item">Blog</Link></li>               
                            </ul>
                            <p className="footer__email footer__email--desktop">hello@cinnamon.agency</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="footer__right">
                        <h4 className="footer__title footer__title--desktop">All software, zero bullshit.</h4>
                        <div className="footer__address">
                            <Address 
                            title="Zagreb"
                            description={"Slavonska avenija 6,\n 10000, Zagreb, Croatia \n Slavonska avenija 6,"}
                            titleTag="p"
                            titleVariant=" title--size-small " 
                            descriptionVariant=" description--size-medium description--color-secondary "/>

                            <Address 
                            title="New York"
                            description={"500 7th Ave, New York,\n NY 10018, United States"}
                            titleTag="p"
                            titleVariant=" title--size-small " 
                            descriptionVariant=" description--size-medium description--color-secondary "/>
                            <Address 
                            title="Belgrade"
                            description={"Bulevar vojvode Mišića 37\n 11000, Belgrade, Serbia"}
                            titleTag="p"
                            titleVariant=" title--size-small " 
                            descriptionVariant=" description--size-medium description--color-secondary "/>
                            
                        </div>
                        <div className="footer__newsletter">
                            <form className="footer__form">
                                <Title variant="title title--size-small" text="Newsletter"/>
                                <div class="footer__form-group">
                                    <input type="email" id="email" class="footer__form-input peer" placeholder=" " />
                                    <label htmlFor="email" class="footer__form-label">Your E-mail</label>
                                </div>
                                <Button variant="footer__button" text="Subscribe"/>
                            </form>
                            <div className="footer__reviews">
                            <Image className="" width='200' height="56" alt="peangea Logo" src="/svgs/pangea-badge.7734fbc8.svg"/>
                            <Image className="max-w-xs w-56" width='540' height="165" alt="clutch badge Logo" src="/images/clutch-badge.png"/>
                            </div>
                            <p className="footer__email footer__email--mobile">hello@cinnamon.agency</p>
                        </div>
                    
                    </div>
                </div>
                <div className="footer__bottom-side">
                    <div className="footer__copyright-list">
                        <p className="footer__copyright-year">© 2022 Cinnamon</p>
                        <Link href="/" className="footer__privacy">Privacy Policy</Link>
                    </div>
                    <ul className="footer__socials">
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="LinkedIn" src="/svgs/linkedIn.svg"/></Link></li> 
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="Dribble" src="/svgs/dribble.svg"/></Link></li> 
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="behance" src="/svgs/behance.svg"/></Link></li> 
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="instagram" src="/svgs/instagram.svg"/></Link></li> 
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="facebook" src="/svgs/facebook.svg"/></Link></li> 
                       <li><Link  href="/"><Image className="footer__socials-item" width='351' height="45" alt="cinnamon" src="/svgs/cinnamon.svg"/></Link></li> 
                    </ul>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;