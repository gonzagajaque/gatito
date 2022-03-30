import React from 'react';
import { Platform, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native';
import stylesGlobal, { colors } from '../../styles';
import styles from './styles';

export default function TelaPadrao({ children }) {
    return (
        <>
            <SafeAreaView style={styles.ajusteTela}>
                <StatusBar backgroundColor={colors.roxo} />
                <KeyboardAvoidingView
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={stylesGlobal.preencher}
                >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={styles.ajusteTelaBaixo} />
        </>
    );
}