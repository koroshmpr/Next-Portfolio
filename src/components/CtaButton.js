import React from 'react';
import Link from "next/link";

const CtaButton = () => (
    <div className="fixed bottom-2 left-2 flex justify-center items-center overflow-hidden">
        <div className="w-44 h-auto flex item-center justify-center relative">
            <CircularText  className={"fill-dark animate-cta"}/>
            <Link className={'w-20 h-20 font-bold rounded-full flex items-center justify-center absolute left-1/2 top-1/2 text-white bg-dark rounded-full -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-90'}
                  href={'tel:+989358088118'}>
                Call Me
            </Link>
        </div>
    </div>
);

export default CtaButton;