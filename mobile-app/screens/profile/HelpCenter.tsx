import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/shared/Header';
import FormField from '../../components/shared/input/FormField';
import SafeAreaView from '../../components/shared/SafeAreaView';
import View from '../../components/shared/View';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';
import { Body, BodyEmphasized } from '../../components/shared/typography';
import Button from '../../components/shared/button/Button';
import Separator from '../../components/shared/spacer/Divider';
import ScrollView from '../../components/shared/ScrollView';
import { useThemeColors } from '../../hooks/useThemeColor';

const questions = [
  {
    question: 'How do I change my password?',
    answer:
      'You can change your password by going to the profile screen and tapping on the "Change Password" button.',
  },
  {
    question: 'How do I change my email?',
    answer:
      'You can change your email by going to the profile screen and tapping on the "Change Email" button.',
  },
  {
    question: 'How do I change my phone number?',
    answer:
      'You can change your phone number by going to the profile screen and tapping on the "Change Phone Number" button.',
  },
  {
    question: 'How do I change my name?',
    answer:
      'You can change your name by going to the profile screen and tapping on the "Change Name" button.',
  },
  {
    question: 'How do I change my profile picture?',
    answer:
      'You can change your profile picture by going to the profile screen and tapping on the "Change Profile Picture" button.',
  },
  {
    question: 'How do I change my address?',
    answer:
      'You can change your address by going to the profile screen and tapping on the "Change Address" button.',
  },
];

interface HelpCenterProps extends ProfileScreenProps<'HelpCenter'> {}

const HelpCenter: React.FC<HelpCenterProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());
  const { text, secondaryText } = useThemeColors();
  const [searchText, setSearchText] = useState('');
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const toggleQuestion = (index: number) => {
    setActiveQuestions(
      activeQuestions.includes(index)
        ? activeQuestions.filter((i) => i !== index)
        : [...activeQuestions, index]
    );
  };

  useEffect(() => {
    const filteredQuestions = questions.filter((question) =>
      question.question.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuestions(filteredQuestions);
  }, [searchText]);

  return (
    <SafeAreaView px='m' flex={1}>
      <Header title='Help Center' />
      <View mt='m'>
        <FormField
          containerProps={{
            borderColor: 'lightgray',
            borderWidth: 1,
          }}
          onChangeText={setSearchText}
          leftIcon={<Ionicons color='gray' name='search' size={24} />}
          placeholder='Search'
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} mb='m'>
        <View mt='l'>
          {filteredQuestions.map(({ question, answer }, index) => {
            const isActive = activeQuestions.includes(index);
            const color = isActive ? text : secondaryText;
            return (
              <View key={question}>
                <View key={index}>
                  <Button
                    onPress={() => toggleQuestion(index)}
                    direction='row'
                    justify='space-between'
                    align='center'
                  >
                    <BodyEmphasized color={color}>{question}</BodyEmphasized>
                    {isActive ? (
                      <Ionicons name='chevron-down' color={color} size={24} />
                    ) : (
                      <Ionicons
                        color={color}
                        name='chevron-forward'
                        size={24}
                      />
                    )}
                  </Button>
                  {isActive && (
                    <View mt='m'>
                      <Body color={secondaryText}>{answer}</Body>
                    </View>
                  )}
                </View>
                {index !== questions.length - 1 && <Separator my='m' />}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;
1;
