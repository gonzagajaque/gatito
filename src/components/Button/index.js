import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import funcaoEstilosPadrao from './styles';

export default function Button({ pequeno = false, invertido = false, value, action, styles }) {

    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

    return (
        <TouchableOpacity onPress={action} style={[estilosPadrao.botao, styles]}>
            <Text style={[estilosPadrao.valor, styles]}>
                {value}
            </Text>
        </TouchableOpacity>
    )
}