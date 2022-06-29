import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header/index'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '10/05/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Boleto',
        value: '2.500,00',
        date: '17/09/2022',
        type: 1 // ganhos
    },
    {
        id: 3,
        label: 'Pix Boleto - Adivania',
        value: '1.500,00',
        date: '17/11/2022',
        type: 1 // ganhos
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Felipe Holanda"/>
      
      <Balance saldo="9.500,50" gastos="-532,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Movements data={item}/>}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 19,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
