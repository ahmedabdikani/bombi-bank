import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

import Numpad from '../../components/Numpad';
import Button from '../../components/shared/button/Button';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Card from '../../components/shared/Card';
import Header from '../../components/shared/Header';
import { Image } from '../../components/shared/image';
import Modal from '../../components/shared/Modal';
import Picker from '../../components/shared/Picker';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import {
  Body,
  Heading,
  HeadingEmphasized,
  LargeTitleEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { cryptocurrencies } from '../../data/mock';
import { useThemeColors } from '../../hooks/useThemeColor';

interface ExchangeProps {}

const Exchange: React.FC<ExchangeProps> = ({}) => {
  const [amount, setAmount] = useState('0.00');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState(
    cryptocurrencies[0]
  );
  const [currency, setCurrency] = useState<typeof cryptocurrencies[number]>(
    cryptocurrencies[0]
  );
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState<
    typeof cryptocurrencies[number]
  >(cryptocurrencies[1]);

  const handleAmountChange = (value: string) => {
    if (value === 'clear') setAmount('0.00');
    else if (amount === '0.00') setAmount(value + '.00');
    else {
      const [v, n] = amount.split('.');
      setAmount(v + value + '.' + n);
    }
  };

  return (
    <View flex={1}>
      {isModalVisible && (
        <PickerModal
          onSelect={(value) =>
            setCurrency(
              cryptocurrencies[
                cryptocurrencies.findIndex((c) => c.name === value)
              ]
            )
          }
          icons={cryptocurrencies.map(({ icon }) => icon)}
          selectedOption={currency.name}
          options={cryptocurrencies.map((c) => c.name)}
          isVisible={isModalVisible}
          toggleModal={() => setIsModalVisible(!isModalVisible)}
        />
      )}
      {isSecondModalVisible && (
        <PickerModal
          onSelect={(value) =>
            setSecondSelectedCurrency(
              cryptocurrencies[
                cryptocurrencies.findIndex((c) => c.name === value)
              ]
            )
          }
          icons={cryptocurrencies.map(({ icon }) => icon)}
          selectedOption={secondSelectedCurrency.name}
          options={cryptocurrencies.map((c) => c.name)}
          isVisible={isSecondModalVisible}
          toggleModal={() => setIsSecondModalVisible(!isSecondModalVisible)}
        />
      )}
      <Card px='m' pb='l'>
        <SafeAreaView />
        <Header title='Exchange' />
        <View direction='row' place='center'>
          <Body>$</Body>
          <LargeTitleEmphasized>2,323.93</LargeTitleEmphasized>
        </View>
      </Card>
      <View direction='row' mt='xl' mx='l' align='center'>
        <Button flex={1} onPress={() => setIsModalVisible(!isModalVisible)}>
          <Card p='s' borderRadius='s'>
            <View direction='row'>
              <Image size={20} mr='s' source={currency.icon} />
              <Body>{currency.name}</Body>
            </View>
          </Card>
        </Button>
        <Body mx='m'>To</Body>
        <Button
          flex={1}
          onPress={() => setIsSecondModalVisible(!isSecondModalVisible)}
        >
          <Card p='s' borderRadius='s'>
            <View direction='row'>
              <Image mr='s' size={20} source={secondSelectedCurrency.icon} />
              <Body>{secondSelectedCurrency.name}</Body>
            </View>
          </Card>
        </Button>
      </View>
      <Spacer />
      <View direction='row' mt='m' place='center'>
        <LargeTitleEmphasized>{amount}</LargeTitleEmphasized>
        <Heading ml='s' color='gray'>
          {secondSelectedCurrency.currency}
        </Heading>
      </View>
      <Spacer />
      <Numpad onPress={handleAmountChange} />
      <Spacer />
      <ButtonWithText label='Confirm' mx='m' mb='l' />
    </View>
  );
};

interface PickerModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  options: string[];
  selectedOption?: string;
  icons?: any;
  onSelect?: (option: string) => void;
}

const PickerModal: React.FC<PickerModalProps> = ({
  isVisible,
  toggleModal,
  options,
  selectedOption,
  icons,
  onSelect,
}) => {
  const {
    text,
    secondaryText,
    tint: { primary },
  } = useThemeColors();
  return (
    <Modal visible={isVisible} toggleVisible={toggleModal}>
      <View flex={1} justify='center' px='l'>
        <Card flex={0.7} bg='card' p='m' py='l'>
          <View direction='row' justify='space-between'>
            <HeadingEmphasized>Summary</HeadingEmphasized>
            <Button onPress={toggleModal}>
              <Ionicons name='ios-close' size={24} color={text} />
            </Button>
          </View>
          <View mt='l'>
            {options.map((option, index) => (
              <Button
                onPress={() => {
                  onSelect?.(option);
                  toggleModal();
                }}
                key={index}
                direction='row'
                mb='m'
              >
                {icons && (
                  <Image size={30} resizeMode='contain' source={icons[index]} />
                )}
                <Heading color={secondaryText} flex={1} ml='m'>
                  {option}
                </Heading>
                {selectedOption === option && (
                  <Ionicons name='ios-checkmark' size={24} color={primary} />
                )}
              </Button>
            ))}
          </View>
        </Card>
      </View>
    </Modal>
  );
};
export default Exchange;
