import React from 'react';
import { motion, useScroll } from 'framer-motion';

interface Props {
  value: string;
}

function Word({ value }: Props) {
  return <span className="mr-1 text-3xl">{value}</span>;
}

export default Word;
