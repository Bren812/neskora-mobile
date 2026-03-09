import { View, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ListaItens() {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Lista de Itens</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Configuracoes')}
            >
                <Text style={styles.textoBtn}>Configuracoes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Item')}
            >
                <Text style={styles.textoBtn}>Item</Text>
            </TouchableOpacity>

        </View>


    );
}