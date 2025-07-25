"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredAnimationProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

export default function StaggeredAnimation({
    children,
    staggerDelay = 0.1,
    className = ""
}: StaggeredAnimationProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const itemTransition = {
        duration: 0.6,
        ease: "easeOut" as const,
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <motion.div key={index} variants={itemVariants} transition={itemTransition}>
                        {child}
                    </motion.div>
                ))
                : <motion.div variants={itemVariants} transition={itemTransition}>{children}</motion.div>
            }
        </motion.div>
    );
}