import React from 'react';
import BackgroundCircles from './BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hello, The Name's ${pageInfo?.name}`,
      'I am a Full Stack Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'
    >
      <BackgroundCircles />
      <img
        className='relative rounded-full h-36 w-36 mx-auto object-cover '
        src={urlFor(pageInfo?.heroImage).url()}
        alt=''
      />
      {/* <Image
        className='relative rounded-full mx-auto object-cover'
        src='/korn1.jpeg'
        width={144}
        height={144}
        alt=''
      /> */}
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
