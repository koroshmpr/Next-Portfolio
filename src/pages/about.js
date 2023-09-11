import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import Skills from "@/components/Skills";


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue , {duration : 5000})
    const isInView = useInView(ref , {once: true});
    useEffect(()=> {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView , value , motionValue])
    useEffect(() => {
        springValue.on("change" , (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed()
            }
        })
    },[])
    return <span ref={ref}> </span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>About | webco </title>
                <meta description="about us page"/>
            </Head>
            <main className="flex w-full flex-col items-center justify--center">
                <AnimatedText className="text-center py-10 text-primary/75 border-b-2" text="about us"/>
                <Layout className="grid w-full lg:grid-cols-8 gap-16 items-center lg:items-start justify-center pt-8 px-8">
                    <div className="col-span-3">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                        <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet aspernatur atque commodi debitis dolorem error et fugit harum illo incidunt, libero perspiciatis quae quas quod vero voluptatem voluptates?</p>
                        <p className="font-medium py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet aspernatur atque commodi debitis dolorem error et fugit harum illo incidunt, libero perspiciatis quae quas quod vero voluptatem voluptates?</p>
                        <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet aspernatur atque commodi debitis dolorem error et fugit harum illo incidunt, libero perspiciatis quae quas quod vero voluptatem voluptates?</p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
                        <Image className="rounded-2xl w-full h-auto" src={profilePic} alt="profile Picture"/>
                    </div>
                    <div className="col-span-2 flex flex-col items-center lg:items-end justify-between gap-16">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={40}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={50}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={60}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                        </div>
                    </div>
                </Layout>
                <Skills />
            </main>
        </>
    );
};

export default about;
