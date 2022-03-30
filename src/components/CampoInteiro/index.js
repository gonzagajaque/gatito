import React from 'react';

import { TextInput } from 'react-native';
import stylesPadrao from './styles';

export default function CampoInteiro({ value, styles, action }) {
    const atualiza = (novoValor, actionRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');

        actionRetorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(value);

    return <TextInput
        style={[stylesPadrao.campo, styles]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => { atualiza(novoValor, action) }}
        value={numeroEmTexto}
    />
}