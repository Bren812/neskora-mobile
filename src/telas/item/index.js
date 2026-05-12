import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Item() {
  const navigation = useNavigation();
  
  const [nome, setNome] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [setor, setSetor] = useState('');

  const handleSalvar = () => {
    if (!nome || !fornecedor || !setor) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    // Aqui no futuro você salvará no banco de dados
    Alert.alert("Sucesso", `${nome} cadastrado para o setor ${setor}`);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Cadastro de Produto</Text>a
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Produto</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: Batata Frita" />

        <Text style={styles.label}>Fornecedor</Text>
        <TextInput style={styles.input} value={fornecedor} onChangeText={setFornecedor} placeholder="Ex: Distribuidora X" />

        <Text style={styles.label}>Setor (Categoria)</Text>
        <TextInput style={styles.input} value={setor} onChangeText={setSetor} placeholder="Ex: Congelados" />

        <TouchableOpacity style={styles.btnSalvar} onPress={handleSalvar}>
          <Text style={styles.textBtn}>SALVAR PRODUTO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnExcluir} onPress={() => Alert.alert("Aviso", "Função excluir disponível apenas em itens existentes.")}>
          <Text style={styles.textBtn}>EXCLUIR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: 'darkslategrey', padding: 40, alignItems: 'center' },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  form: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 15 },
  input: { borderBottomWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  btnSalvar: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  btnExcluir: { backgroundColor: '#e74c3c', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  textBtn: { color: '#fff', fontWeight: 'bold' }
});