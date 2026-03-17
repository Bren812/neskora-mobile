import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import styles from './styles';

export default function Login() {

    const navigation = useNavigation();
    // Estados para armazenar usuário e senha
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    // Valida se a senha atende aos requisitos de segurança
    const validarSenha = (senha) => {
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temNumero = /[0-9]/.test(senha);
        const temEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha);
        const temTamanho = senha.length >= 8;

        return temMaiuscula && temMinuscula && temNumero && temEspecial && temTamanho;
    };

    // Função para processar o login
    const handleLogin = () => {
        // Verifica se campos estão preenchidos
        if (!usuario || !senha) {
            Alert.alert('Erro', 'Senha e usuário são obrigatórios');
            return;
        }

        // Valida o tamanho mínimo do usuário
        if (usuario.length < 4) {
            Alert.alert('Erro', 'Usuário deve ter no mínimo 4 caracteres');
            return;
        }

        // Valida a força da senha
        if (!validarSenha(senha)) {
            Alert.alert('Erro', 'Senha fraca!\n\nA senha deve conter:\n✓ Letra maiúscula\n✓ Letra minúscula\n✓ Número\n✓ Caractere especial\n✓ Mínimo 8 caracteres');
            return;
        }

        // Se passou em todas validações, navega para ListaItens
        navigation.navigate('ListaItens');
    };

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}
            >Login</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                placeholderTextColor="#4078e0"
                value={usuario}
                onChangeText={setUsuario}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#4078e0"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            
            <TouchableOpacity 
                style={styles.botao} 
                onPress={handleLogin} 
            >
                <Text style={styles.textoBtn}>Entrar</Text>
            </TouchableOpacity>
            
        </View>

    );
}