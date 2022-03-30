import React, { useState } from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import CampoInteiro from '../../../components/CampoInteiro';
import Button from '../../../components/Button';

import styles from './styles';

export default function Item({nome, preco, descricao}) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

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
    <TouchableOpacity style={styles.informacao} onPress={inverteExpandir}>
      <Text style={styles.nome}>{ nome }</Text>
      <Text style={styles.descricao}>{ descricao }</Text>
      <Text style={styles.preco}>{ 
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)
      }</Text>
    </TouchableOpacity>
    {expandir &&
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
        <Button value="Adicionar ao Carrinho" action={() => {}} />
      </View>
    }
    <View style={styles.divisor} />
  </>
}