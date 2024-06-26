'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  value: string;
}

function Paragraph({ value }: Props) {
  const element = useRef(null);
  const scroll = useScroll({ target: element, offset: ['start 0.9', 'start 0.1'] });

  const words = value.split(' ');
  return (
    <div className="px-8 flex flex-wrap max-w-[900px]" ref={element}>
      {words.map((word, i) => {
        const stepBetweenWords = 1 / words.length;
        const wordStart = i / words.length;
        const wordEnd = wordStart + stepBetweenWords;
        return <Word range={[wordStart, wordEnd]} progress={scroll.scrollYProgress} key={i} value={word} />;
      })}
    </div>
  );
}

export default Paragraph;

interface wordProps {
  value: string;
  range: number[];
  progress: MotionValue<number>;
}

function Word({ value, progress, range }: wordProps) {
  const character = value.split('');

  const wordAmount = range[1] - range[0];
  const wordStep = wordAmount / value.length;

  return (
    <span className="mr-2 mt-1 text-4xl relative font-bold">
      {character.map((character, i) => {
        const charcterStart = range[0] + wordStep * i;
        const charcterEnd = range[0] + wordStep * (i + 1);
        return <Character key={i} value={character} progress={progress} range={[charcterStart, charcterEnd]} />;
      })}
    </span>
  );
}

interface CharacterProps {
  value: string;
  range: number[];
  progress: MotionValue<number>;
}

function Character({ value, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-15">{value}</span>
      <motion.span style={{ opacity }}>{value}</motion.span>
    </span>
  );
}
