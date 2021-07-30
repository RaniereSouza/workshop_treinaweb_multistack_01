import React             from 'react';
import { View }          from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import Button    from 'ui/components/inputs/Button/Button';

const EncontrarDiaristas: React.FC = () => {
  return (
    <View>
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua região'}
      />

      <TextInputMask
        type={'custom'}
        options={{
          mask: '99.999-999'
        }}
        customTextInput={TextInput}
        customTextInputProps={{
          label: 'Digite seu CEP'
        }}
      />
    </View>
  );
}

export default EncontrarDiaristas;
