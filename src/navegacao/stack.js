import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Configuracoes from '../telas/Configuracoes';
import Login from '../telas/login';
import ListaItens from '../telas/lista-itens';
import Item from '../telas/item';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#777' },
                // headerShown: false,

            }}
            initialRouteName='Login'
        >
            <Stack.Screen
                name="Configuracoes"
                component={Configuracoes}
                options={{ title: 'Neskora' }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ListaItens" component={ListaItens} />
            <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
    );
}

export default RootStack;