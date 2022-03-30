import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
    conteudo: {
        backgroundColor: colors.roxo,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 24,
    },
    total: {
        alignItems: 'center',
    },
    descricao: {
        fontSize: 16,
        color: colors.claro,
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        color: colors.laranja,
    },
    botao: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
});