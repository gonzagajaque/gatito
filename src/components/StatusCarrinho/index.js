import React from 'react';

import { Text, View } from 'react-native';

import styles from './styles';
import Button from '../Button';

export default function StatusCarrinho({ total }) {
    return (
        <View style={styles.conteudo}>
            <View style={styles.total}>
                <Text style={styles.descricao}>Total do carrinho:</Text>
                <Text style={styles.valor}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
                </Text>
            </View>
            <View style={styles.botao}>
                <Button value='Concluir Pedido' invertido />
            </View>
        </View>
    )
}