import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../components/StatusCarrinho';
import Item from './Item';

const services = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NAO DE BANHO NO SEU GATO! Mas se precisar, nós damos.",
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose de vacina V4. Seu gato precisa de duas.",
        quantidade: 2,
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose de vacina antirrábica. Seu gato precisa de uma por ano.",
        quantidade: 1,
    },
];

export default function Carrinho() {

    const total = services.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0);

    return (
        <>
            <StatusCarrinho total={total} />
            <FlatList
                data={services}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
                removeClippedSubviews={false}
            />
        </>
    );
}