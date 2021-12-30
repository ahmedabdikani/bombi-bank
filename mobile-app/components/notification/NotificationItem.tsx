import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';

import withClassComponent from '../../hoc/withClassComponent';
import { useThemeColors } from '../../hooks/useThemeColor';
import Button from '../shared/button/Button';
import Card from '../shared/Card';
import { Image } from '../shared/image';
import { Body, BodyEmphasized, Caption } from '../shared/typography';
import View from '../shared/View';

const AnimatedCard = Animated.createAnimatedComponent(withClassComponent(Card));

interface NotificationItemProps {
  notification: {
    id: string;
    image: any;
    message: string;
    title: string;
    date: string;
  };
  index: number;
  onDelete: (id: string) => void;
}
const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onDelete,
  index,
}) => {
  const { id, image, message, title, date } = notification;
  const { text } = useThemeColors();
  return (
    <AnimatedCard
      entering={LightSpeedInLeft.duration(300).delay(index * 100)}
      exiting={LightSpeedOutRight.duration(300)}
      layout={Layout.springify()}
      p='m'
      mb='m'
      mx='m'
      key={id}
      direction='row'
    >
      <Image size={24} source={image} />
      <View ml='m' flex={1}>
        <BodyEmphasized mb='s'>{title}</BodyEmphasized>
        <Body color='gray' mb='s'>
          {message}
        </Body>
        <Caption color='gray'>{date}</Caption>
      </View>
      <Button onPress={() => onDelete(id)}>
        <Ionicons name='close' size={24} color={text} />
      </Button>
    </AnimatedCard>
  );
};

export default NotificationItem;
