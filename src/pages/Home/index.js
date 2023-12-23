import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Fundacred',
        value: '500',
        date: '10/01/2024',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'FIES',
        value: '47,55',
        date: '10/01/2024',
        type: 0 //despesas
    },
    {
        id: 3,
        label: 'Pix mãe',
        value: '300',
        date: '23/12/2023',
        type: 1 //receita / entradas
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Bruna"/>

        <Balance saldo="2.250,24" gastos="-675,44"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>
        
        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false} //não aparece a barra de rolagem ao lado
            renderItem={({item}) => <Movements data={item}/>}
        />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});