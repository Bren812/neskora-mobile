import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import styles from './styles';

export default function Configuracoes() {
    const navigation = useNavigation();
    
    // Estado para controlar se notificações estão ativadas
    const [notificacoes, setNotificacoes] = useState(true);
    
    // Estado para controlar se modo escuro está ativado
    const [modoEscuro, setModoEscuro] = useState(false);

    // Função para sair da conta com confirmação
    const handleSair = () => {
        // Exibe alerta pedindo confirmação antes de sair da conta
        Alert.alert(
            'Sair da conta',
            'Tem certeza que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => navigation.navigate('Login'),
                    style: 'destructive',
                },
            ]
        );
    };

    // Função para mostrar informações sobre a aplicação
    const handleSobre = () => {
        // Exibe informações gerais da app
        Alert.alert(
            'Sobre Neskora',
            'Versão 1.0.0\n\nAplicação de gerenciamento de tarefas.\n\n© 2026 Neskora',
            [{ text: 'OK', onPress: () => {} }]
        );
    };

    // Renderiza a tela de configurações com scroll
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Título da tela com emoji */}
            <Text style={styles.titulo}>⚙️ Configurações</Text>
            
            {/* ========== SEÇÃO PREFERÊNCIAS ========== */}
            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>📱 Preferências</Text>
                
                {/* Opção de Notificações com Switch */}
                <View style={styles.opcao}>
                    <View style={styles.textoOpcao}>
                        <Text style={styles.labelOpcao}>🔔 Notificações</Text>
                        <Text style={styles.descricaoOpcao}>Receber alertas</Text>
                    </View>
                    <Switch
                        value={notificacoes}
                        onValueChange={setNotificacoes}
                        trackColor={{ false: '#ccc', true: '#007AFF' }}
                        thumbColor={notificacoes ? '#fff' : '#f4f3f4'}
                    />
                </View>
                
                {/* Opção de Modo Escuro com Switch */}
                <View style={styles.opcao}>
                    <View style={styles.textoOpcao}>
                        <Text style={styles.labelOpcao}>🌙 Modo Escuro</Text>
                        <Text style={styles.descricaoOpcao}>Tema escuro da app</Text>
                    </View>
                    <Switch
                        value={modoEscuro}
                        onValueChange={setModoEscuro}
                        trackColor={{ false: '#ccc', true: '#007AFF' }}
                        thumbColor={modoEscuro ? '#fff' : '#f4f3f4'}
                    />
                </View>
            </View>
            
            {/* ========== SEÇÃO CONTA ========== */}
            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>👤 Conta</Text>
                
                {/* Botão para selecionar idioma */}
                <TouchableOpacity style={styles.botaoOpcao}>
                    <Text style={styles.labelOpcao}>🌐 Idioma</Text>
                    <Text style={styles.valorOpcao}>Português 🇧🇷</Text>
                </TouchableOpacity>
                
                {/* Botão para gerenciar privacidade */}
                <TouchableOpacity style={styles.botaoOpcao}>
                    <Text style={styles.labelOpcao}>🔒 Privacidade</Text>
                    <Text style={styles.valorOpcao}>Gerenciar dados</Text>
                </TouchableOpacity>
            </View>
            
            {/* ========== SEÇÃO AJUDA E SUPORTE ========== */}
            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>❓ Ajuda e Suporte</Text>
                
                {/* Botão para exibir informações sobre a app */}
                <TouchableOpacity 
                    style={styles.botaoOpcao}
                    onPress={handleSobre}
                >
                    <Text style={styles.labelOpcao}>ℹ️ Sobre Neskora</Text>
                    <Text style={styles.valorOpcao}>v1.0.0</Text>
                </TouchableOpacity>
            </View>
            
            {/* ========== SEÇÃO SAIR DA CONTA ========== */}
            <View style={styles.cardSair}>
                <Text style={styles.textoCardSair}>Gerenciar Conta</Text>
                
                {/* Botão destacado para sair da conta */}
                <TouchableOpacity 
                    style={styles.botaoSair} 
                    onPress={handleSair}
                >
                    <Text style={styles.textoBotaoSair}>🚪 Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}