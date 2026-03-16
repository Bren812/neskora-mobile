import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Login() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Login</Text>
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('ListaItens')} 
            >
                <Text style={styles.textoBtn}>Login</Text>
                
            </TouchableOpacity>
            
        </View>

    );
}