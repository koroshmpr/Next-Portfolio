import React from 'react';
import {motion} from "framer-motion";

const qoute = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.08,
        }
    }
}
const singleWord = {
    initial: {
        x:-70,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x:0,
        transition: {
            duration: 0.7,
        }
    }
}
const AnimatedText = ({text, className = ""}) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden ">
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-4xl lg:text-8xl ${className}`}
                 variants={qoute}
                 initial="initial"
                  animate="animate">

                {text.split("").map((word, index) =>
                    <motion.span key={word + "_" + index} className="inline-block"
                                 variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                )
                }
            </motion.h1>
        </div>
    );
};

export default AnimatedText;