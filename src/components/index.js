import React from 'react';
import { TextInput } from 'react-native';
import stylesPadrao from './styles';

export default function CampoInteiro({ value, action, styles }) {

    const atualiza = (newValue, actionReturn) => {
        const verificaInteiro = newValue.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = newValue.replace(/^(0)(.+)/, '$2');

        actionReturn(removeZeroEsquerda);
    }

    const numeroString = String(value);

    return (
        <TextInput
            style={[stylesPadrao.campo, styles]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(newValue) => { atualiza(newValue, action) }}
            value={numeroString}
            removeClippedSubviews
        />
    )
}