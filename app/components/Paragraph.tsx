'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

interface Props {
  value: string;
}

function Paragraph({ value }: Props) {
  // const [blur, setBlur] = useState('');
  const element = useRef(null);
  const scroll = useScroll({ target: element, offset: ['start 0.9', 'start 0.25'] });

  // const x = scroll.scrollYProgress.on('change', (value) => {
  //   if (value < 0.35) {
  //     setBlur('blur(5px)');
  //   } else {
  //     setBlur('blur(0px)');
  //   }
  // });

  return (
    <motion.p
      ref={element}
      className="text-3xl max-w-[800px] px-8"
      style={{
        opacity: scroll.scrollYProgress,
        // filter: blur,
      }}
    >
      {value}
    </motion.p>
  );
}

export default Paragraph;
