import React from 'react';
import Link from "next/link";
import Logo from "@/components/logo";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon} from "@/components/icon";

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-1 inline-block bg-secondary absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}`}>
            &nbsp;
            </span>
        </Link>
    )
}
const NavBar = () => {
    return (
        <header
            className="w-full px-2 lg:px-32 py-8 font-medium flex items-center justify-between">
            <nav className="flex gap-3">
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="about" className='mx-4'/>
                <CustomLink href="/projects" title="projects" className='mx-4'/>
                <CustomLink href="/articles" title="articles" className='mx-4'/>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
            <nav className="flex gap-3">
                <motion.a target={"_blank"} whileHover={{y: -2}} whileTop={{scale:0.9}} href="https://twitter.com/">
                    <TwitterIcon/>
                </motion.a>
                <motion.a target={"_blank"} whileHover={{y: -2}} whileTop={{scale:0.9}} href="https://twitter.com/">
                    <GithubIcon/>
                </motion.a>
                <motion.a target={"_blank"} whileHover={{y: -2}} whileTop={{scale:0.9}} href="https://twitter.com/">
                    <LinkedInIcon/>
                </motion.a>
                <motion.a target={"_blank"} whileHover={{y: -2}} whileTop={{scale:0.9}} href="https://twitter.com/">
                    <PinterestIcon/>
                </motion.a>

            </nav>
        </header>
    );
};

export default NavBar;