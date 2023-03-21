import { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { TextInput, Button, Text} from 'react-native-paper';

export default function App() {
  const [total, setTotal] = useState(0);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  const sumValues = (x, y) => {
    return x + y;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(valueX) =>
          valueX.length ? setX(parseInt(valueX)) : setX(0)
        }
        mode="flat"
        value={x.toString(10)}
        keyboardType={'numeric'}
        textAlign={'center'}
      />
      <TextInput
        style={styles.input}
        onChangeText={(valueY) =>
          valueY.length ? setY(parseInt(valueY)) : setY(0)
        }
        mode="flat"
        value={y.toString(10)}
        keyboardType={'numeric'}
        textAlign={'center'}
      />
      <View style={({ padding: 10 }, { margin: 5 })}>
        <Button mode="contained" onPress={() => setTotal(sumValues(x, y))}>
          Somar
        </Button>
      </View>
      <Text style={styles.result}>Resultado: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    margin: 5,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
  },
  result: {
    textAlign: 'center',
    marginTop: 10,
  },
});
