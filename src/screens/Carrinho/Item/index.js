import React, { useState } from 'react';

import { View, Text } from 'react-native';

import CampoInteiro from '../../../components/CampoInteiro';
import Button from '../../../components/Button';

import styles from './styles';

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return <>
        <View style={styles.informacao}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </View>
        <View style={styles.carrinho}>
            <View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Quantidade:</Text>
                    <CampoInteiro styles={styles.quantidade} value={quantidade} action={atualizaQuantidadeTotal} />
                </View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Total:</Text>
                    <Text style={styles.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }</Text>
                </View>
            </View>
            <Button value="Remover do Carrinho" action={() => { }} />
        </View>
        <View style={styles.divisor} />
    </>
}