import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Navbar = () => {
    const [scrolled, setScrolled]= useState(false)
    const handleScroll=()=>{
        window.pageYOffset>0?setScrolled(true):setScrolled(false)       
    }
    useEffect(()=>{     
        window.addEventListener('scroll', handleScroll);       
    },[])
    return (
        <header className={("header "+(scrolled?" header--light":" header--dark"))}>
            <nav className="header__nav header__nav--desktop">
                <Logo image={(scrolled?"/svgs/logo-dark.09b72b20.svg":"/svgs/logo-white.97f0c2c8.svg")}/>
                <ul className="header__list">
                    <li><Link href="/projects" className={((scrolled?"header__link--light":"header__link--dark"))+" header__list-item "}>Projects</Link></li>
                    <li><Link href="/services" className={((scrolled?"header__link--light":"header__link--dark"))+" header__list-item "}>Services</Link></li>
                    <li><Link href="/about-us"className={((scrolled?"header__link--light":"header__link--dark"))+" header__list-item "}>About Us</Link></li>
                    <li><Link href="/careers"className={((scrolled?"header__link--light":"header__link--dark"))+" header__list-item "}>Careers</Link></li>
                    <li><Link href="/blog"className={((scrolled?"header__link--light":"header__link--dark"))+" header__list-item "}>Blog</Link></li>
                </ul>
                <button className={((scrolled?"header__play-button--dark":"header__play-button--light"))+" header__play-button " }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </button>
                <Button text="Contact Us" />
            </nav>
            <nav className="header__nav header__nav--mobile">
                <Logo image={(scrolled?"/svgs/logo-dark.09b72b20.svg":"/svgs/logo-white.97f0c2c8.svg")}/>
                <Image src="/svgs/mobile-menu-icon-dark.d2469ff9.svg" className={(scrolled?" block ":" hidden ")+" object-cover object-center w-6 h-6"} width="6" height="6" alt="dark menu"/>
                <Image src="/svgs/mobile-menu-icon-light.0de793a8.svg" className={(scrolled?" hidden ":" block ")+" object-cover object-center w-6 h-6"} width="6" height="6" alt="light menu"/>
               
            </nav>
        </header>
    );
}

export default Navbar;