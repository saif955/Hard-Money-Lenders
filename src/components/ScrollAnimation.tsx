"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
    delay?: number;
    duration?: number;
    className?: string;
}

export default function ScrollAnimation({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = ""
}: ScrollAnimationProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            scale: direction === "scale" ? 0.8 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75], // Custom easing
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}