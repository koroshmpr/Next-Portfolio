import React from 'react';
import Layout from "@/components/layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-primary font-medium text-md">
            <Layout className="py-8 flex gap-3 items-center">
                <Link className="border-3 border-solid border-primary hover:border-b-3" href="/">Contact Us</Link>
                <Link className="border-3 border-solid border-primary hover:border-b-3" href="/">Privacy</Link>
            </Layout>
            
        </footer>
    );
};

export default Footer;