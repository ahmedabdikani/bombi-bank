import React from 'react';

import Text, { TextProps } from '../Text';

const LargeTitle: React.FC<TextProps> = (props) => {
  return <Body fontSize={30} {...props} />;
};
const Title: React.FC<TextProps> = (props) => {
  return <Body fontSize={20} {...props} />;
};
const Heading: React.FC<TextProps> = (props) => {
  return <Body fontSize={18} {...props} />;
};
const Subheading: React.FC<TextProps> = (props) => {
  return <Body fontSize={16} {...props} />;
};
const Body: React.FC<TextProps> = (props) => {
  return <Text fontSize={14} {...props} />;
};
const Caption: React.FC<TextProps> = (props) => {
  return <Text fontSize={12} {...props} />;
};

const BodyEmphasized: React.FC<TextProps> = (props) => {
  return <Body fontWeight='600' {...props} />;
};
const CaptionEmphasized: React.FC<TextProps> = (props) => {
  return <Caption fontWeight='600' {...props} />;
};
const TitleEmphasized: React.FC<TextProps> = (props) => {
  return <Title fontWeight='700' {...props} />;
};
const HeadingEmphasized: React.FC<TextProps> = (props) => {
  return <Heading fontWeight='600' {...props} />;
};
const SubheadingEmphasized: React.FC<TextProps> = (props) => {
  return <Subheading fontWeight='600' {...props} />;
};
const LargeTitleEmphasized: React.FC<TextProps> = (props) => {
  return <LargeTitle fontWeight='700' {...props} />;
};

export {
  LargeTitle,
  Heading,
  Title,
  Subheading,
  Body,
  Caption,
  BodyEmphasized,
  CaptionEmphasized,
  TitleEmphasized,
  HeadingEmphasized,
  SubheadingEmphasized,
  LargeTitleEmphasized,
};
