import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Criar Nova Postagem</Text>
      {/* Adicione outros componentes ou lógica aqui conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CreatePost;