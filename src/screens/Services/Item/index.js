import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CampoInteiro from '../../../components';
import Button from '../../../components/Button';
import styles from './styles';


export default function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(1);

    return (<>
        <View style={styles.informacao}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
        <View style={styles.carrinho}>
            <View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Quantidade:</Text>
                    <CampoInteiro style={styles.quantidade} value={quantidade} action={setQuantidade} />
                </View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Preço:</Text>
                    <Text style={styles.preco}>0</Text>
                </View>
            </View>
            <Button value='Adicionar' action={() => {}} />
        </View>
        <View style={styles.divisor} />
    </>
    );
}
