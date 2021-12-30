import React, { useCallback, useState } from 'react';
import { SectionList } from 'react-native';

import NotificationItem from '../../components/notification/NotificationItem';
import SafeAreaView from '../../components/shared/SafeAreaView';
import Text from '../../components/shared/Text';
import { SubheadingEmphasized } from '../../components/shared/typography';
import { notifications as data } from '../../data/mock';

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
  const [notifications, setNotifications] = useState(() => data);
  const [refreshing, setRefreshing] = useState(false);

  const onDelete = (id: string) => {
    setNotifications((prev) =>
      prev
        .map((list) => {
          return {
            data: list.data.filter((item) => item.id !== id),
            title: list.title,
          };
        })
        .filter((list) => list.data.length > 0)
    );
  };

  return (
    <SafeAreaView flex={1}>
      <SubheadingEmphasized textAlign='center' mb='l'>
        Notification
      </SubheadingEmphasized>
      <SectionList
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setNotifications(data);
          setRefreshing(false);
        }}
        sections={notifications}
        renderSectionHeader={({ section: { title } }) => (
          <Text mb='l' ml='l' fontSize={16} fontWeight='bold'>
            {title}
          </Text>
        )}
        keyExtractor={useCallback((item) => item.id, [])}
        renderItem={useCallback(
          ({ item, index }) => (
            <NotificationItem
              index={index}
              notification={item}
              onDelete={onDelete}
            />
          ),
          []
        )}
      />
    </SafeAreaView>
  );
};

export default Notification;
