// components/ContactForm.tsx

"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        },
      }}
      className="space-y-4"
    >
      <div className="text-xl font-medium">Have an opportunity or idea?</div>
      <p className="text-muted-foreground">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className={cn(
          buttonVariants({
            variant: "default",
            size: "lg",
            className: "w-full",
          })
        )}
      >
        <span>Get in Touch</span>
        <MoveUpRight className="ml-2 h-5 w-5" />
      </a>
    </motion.div>
  );
}
