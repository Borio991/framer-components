'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  value: string;
}

function Paragraph({ value }: Props) {
  const element = useRef(null);
  const scroll = useScroll({ target: element, offset: ['start 0.9', 'start 0.2'] });

  const words = value.split(' ');
  return (
    <p className="px-8 flex flex-wrap max-w-[900px]" ref={element}>
      {words.map((word, i) => {
        const step = 1 / words.length;
        const start = i / words.length;
        const end = start + step;
        console.log(`start :${start} , end :${end}`);
        return <Word range={[start, end]} progress={scroll.scrollYProgress} key={word} value={word} />;
      })}
    </p>
  );
}

export default Paragraph;

interface wordProps {
  value: string;
  range: number[];
  progress: MotionValue<number>;
}

function Word({ value, progress, range }: wordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-1 mt-1 text-4xl relative font-bold">
      <span className="absolute shadow-xl opacity-20">{value}</span>
      <motion.span style={{ opacity }} className=" ">
        {value}
      </motion.span>
    </span>
  );
}
