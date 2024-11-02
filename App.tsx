import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [moedaSelecionada, setMoedaSelecionada] = useState('padrao');
  const [moedaDevolvida, setMoedaDevolvida] = useState('padrao2');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {    
    if (moedaSelecionada === 'padrao') {
      alert('Selecione uma moeda para converter');
    } else if (moedaDevolvida === 'padrao2') {
      alert('Selecione uma moeda de conversão');
    } else if (moedaDevolvida === moedaSelecionada) {
      alert('Não é possível converter para a mesma moeda');
    }else if (valor === '') {
      alert('Digite o valor a ser convertido');
    } else {
      const url = `https://api.exchangerate-api.com/v4/latest/${moedaSelecionada.toUpperCase()}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {

          const taxa = data.rates[moedaDevolvida.toUpperCase()];
          const resultadoConversao = (parseFloat(valor) * taxa).toFixed(2);
          setResultado(resultadoConversao);
        })
        .catch(error => {
          alert('Erro ao converter moeda. Tente novamente mais tarde.');
          console.error(error);
        });
    }
  };

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}>Bem vindo ao conversor de moedas.</Text>

      <View style={styles.boxEntrada}>
            <Picker
          selectedValue={moedaSelecionada}
          onValueChange={(itemValue) => setMoedaSelecionada(itemValue)
          }
          style={styles.boxEntradaPicker}
        >
          <Picker.Item label="Selecione uma moeda" value="padrao" />
          <Picker.Item label="USD (Dolar)" value="usd" />
          <Picker.Item label="BRL (Real)" value="brl" />
          <Picker.Item label="EUR (Euro)" value="eur" />
          <Picker.Item label="JPY (Japão)" value="jpy" />
          <Picker.Item label="CNY (China)" value="cny" />
          <Picker.Item label="INR (India)" value="inr" />
          <Picker.Item label="KRW (Coreia do Sul)" value="krw" />
          <Picker.Item label="MXN (Mexico)" value="mxn" />
          <Picker.Item label="NOK (Noruega)" value="nok" />
          <Picker.Item label="PHP (Filipinas)" value="php" />
          <Picker.Item label="PLN (Polonia)" value="pln" />
          <Picker.Item label="RUB (Russia)" value="rub" />
          <Picker.Item label="SEK (Suecia)" value="sek" />
          <Picker.Item label="SGD (Singapura)" value="sgd" />
          <Picker.Item label="THB (Tailandia)" value="thb" />
          <Picker.Item label="TRY (Turquia)" value="try" />
          <Picker.Item label="TWD (Taiwan)" value="twd" />
          <Picker.Item label="ZAR (São Francisco)" value="zar" />
        </Picker>
        <TextInput
          placeholder="Digite o valor"
          style={styles.boxEntradaValor}
          keyboardType="numeric"
          onChangeText={text => setValor(text)}
        />
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}>Devolver em: </Text>
      <View style={styles.boxEntrada}>
        <Picker
            selectedValue={moedaDevolvida}
            onValueChange={(itemValue) => setMoedaDevolvida(itemValue)}
            style={styles.boxEntradaPicker}
          >
                     <Picker.Item label="Selecione uma moeda" value="padrao2" />
          <Picker.Item label="USD (Dolar)" value="usd" />
          <Picker.Item label="BRL (Real)" value="brl" />
          <Picker.Item label="EUR (Euro)" value="eur" />
          <Picker.Item label="JPY (Japão)" value="jpy" />
          <Picker.Item label="CNY (China)" value="cny" />
          <Picker.Item label="INR (India)" value="inr" />
          <Picker.Item label="KRW (Coreia do Sul)" value="krw" />
          <Picker.Item label="MXN (Mexico)" value="mxn" />
          <Picker.Item label="NOK (Noruega)" value="nok" />
          <Picker.Item label="PHP (Filipinas)" value="php" />
          <Picker.Item label="PLN (Polonia)" value="pln" />
          <Picker.Item label="RUB (Russia)" value="rub" />
          <Picker.Item label="SEK (Suecia)" value="sek" />
          <Picker.Item label="SGD (Singapura)" value="sgd" />
          <Picker.Item label="THB (Tailandia)" value="thb" />
          <Picker.Item label="TRY (Turquia)" value="try" />
          <Picker.Item label="TWD (Taiwan)" value="twd" />
          <Picker.Item label="ZAR (São Francisco)" value="zar" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.boxEntradaBtn} onPress={() => converter()}>
          <Text style={{ color: 'white' }}>Converter</Text>
      </TouchableOpacity>

    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}>Resultado: {resultado}</Text>
    </View>   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxEntrada:{ 
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  boxEntradaPicker: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    flex: 1,
    width: '50%',
    height: 50,
  },
  boxEntradaValor: {
    fontSize: 20, 
    fontWeight: 'bold',
    padding: 15,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    borderRadius: 5,
    textAlign: 'center'
  },
  boxEntradaBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10 
  }
});

