import { Interpolation, Theme } from '@mui/material';
import NextImage, { ImageProps } from 'next/image';
import { ClassAttributes, ImgHTMLAttributes } from 'react';

interface Props
  extends ClassAttributes<HTMLImageElement>,
    ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

// eslint-disable-next-line @next/next/no-img-element
const Image = ({ alt, ...props }: Props) => <img {...props} alt={alt} />;

export default Image;
