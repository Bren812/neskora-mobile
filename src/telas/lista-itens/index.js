import React from 'react';
import { 
  View, 
  Text, 
  SectionList, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dados fictícios para teste da lista
const DATA = [
  {
    title: "Proteínas",
    data: [{ id: '1', name: 'Hambúrguer (Un)', quantity: 50, setor: 'Proteínas' }],
  },
  {
    title: "Congelados",
    data: [{ id: '2', name: 'Batata Frita', quantity: 20, setor: 'Congelados' }],
  },
];

export default function ListaItens() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* --- BARRA SUPERIOR COM ÍCONES --- */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Configuracoes')}
        >
          <Text style={styles.emojiIcon}>⚙️</Text>
          <Text style={styles.iconLabel}>Config</Text>
        </TouchableOpacity>

        <Text style={styles.tituloApp}>Estoque Neskora</Text>

        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Item')}
        >
          <Text style={styles.emojiIcon}>➕</Text>
          <Text style={styles.iconLabel}>Novo</Text>
        </TouchableOpacity>
      </View>
      {/* --------------------------------- */}

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQty}>Estoque atual: {item.quantity}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.btnEditar} 
              onPress={() => navigation.navigate('Item', { item })}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5' 
  },
  header: { 
    backgroundColor: 'darkslategrey', 
    paddingTop: 50, 
    paddingBottom: 20, 
    paddingHorizontal: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  tituloApp: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  iconButton: { 
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  },
  emojiIcon: { 
    fontSize: 22 
  },
  iconLabel: { 
    color: '#fff', 
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 2
  },
  sectionHeader: { 
    backgroundColor: '#dfe4ea', 
    padding: 12, 
    color: 'darkslategrey', 
    fontWeight: 'bold', 
    fontSize: 16,
    textTransform: 'uppercase'
  },
  card: { 
    backgroundColor: '#fff', 
    marginHorizontal: 15, 
    marginVertical: 6, 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center',
    elevation: 2
  },
  itemName: { 
    fontSize: 17, 
    fontWeight: 'bold', 
    color: '#2f3542' 
  },
  itemQty: { 
    fontSize: 14, 
    color: '#747d8c', 
    marginTop: 4 
  },
  btnEditar: { 
    backgroundColor: 'darkslategrey', 
    paddingVertical: 8, 
    paddingHorizontal: 15, 
    borderRadius: 8 
  }
});