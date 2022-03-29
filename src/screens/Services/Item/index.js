import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CampoInteiro from '../../../components';
import Button from '../../../components/Button';
import styles from './styles';


export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverterExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return (<>
        <TouchableOpacity style={styles.informacao} onPress={inverterExpandir}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)}</Text>
        </TouchableOpacity>
        {expandir &&
            <View style={styles.carrinho}>
                <View>
                    <View style={styles.valor}>
                        <Text style={styles.descricao}>Quantidade:</Text>
                        <CampoInteiro style={styles.quantidade} value={quantidade} action={atualizaQuantidadeTotal} />
                    </View>
                    <View style={styles.valor}>
                        <Text style={styles.descricao}>Total:</Text>
                        <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)}</Text>
                    </View>
                </View>
                <Button value='Adicionar' action={() => { }} />
            </View>
        }
        <View style={styles.divisor} />
    </>
    );
}
