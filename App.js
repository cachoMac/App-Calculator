import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class App extends Component {
  state = {
    operator: '',
    firstNum: 0,
    secondNum: 0,
    output: 0,
    history: '',
  };

  button = () => {
    let firstNum = Number(this.state.firstNum);
    let secondNum = Number(this.state.secondNum);
    let result;
    if (this.state.operator == '+') {
      result = firstNum + secondNum;
    } else if (this.state.operator == '-') {
      result = firstNum - secondNum;
    } else if (this.state.operator == '*') {
      result = firstNum * secondNum;
    } else if (this.state.operator == '/') {
      result = firstNum / secondNum;
    }
    this.setState({ output: result });
    let express =
      this.state.firstNum +
      ' ' +
      this.state.operator +
      ' ' +
      this.state.secondNum +
      ' = ' +
      result.toString();

    let history = express + '\n' + this.state.history;
    this.setState({ history: history });
  };

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: '#ffc100' }}>
        <View
          style={{
            marginLeft: '5%',
            marginTop: '20%',
            marginRight: '5%',
          }}>
          <Text style={style.Wcalcu}>CALCULATOR</Text>
          <Text style={style.Text}>First Number</Text>
          <TextInput
            style={{ borderWidth: 0, margin: 5 }}
            placeholder="Type here"
            keyboardType={'numeric'}
            onChangeText={(text) => this.setState({ firstNum: text })}
          />
          <Text style={style.Text}>Operation</Text>
          <TextInput
            style={{ boderWidth: 0, margin: 5 }}
            placeholder="Type here"
            onChangeText={(text) => this.setState({ operator: text })}
          />
          <Text style={style.Text}>Second Number</Text>
          <TextInput
            style={{ borderWidth: 0, margin: 5 }}
            placeholder="Type here"
            keyboardType={'numeric'}
            onChangeText={(text) => this.setState({ secondNum: text })}
          />
          <View style={style.btn}>
            <Button onPress={this.button} title="=" />
            <Text style={style.output}>OUTPUT: {this.state.output}</Text>
          </View>
          <ScrollView
            style={{
              backgroundColor: '#ff7400',
              height: 200,
              borderRadius: 10,
            }}>
            <Text style={style.history}>
              HISTORY : {'\n\n' + this.state.history}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  btn: {
    marginLeft: 80,
    marginRight: 80,
  },
  Wcalcu: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  Text: {
    fontWeight: 'bold',
  },
  history: {
    marginLeft: 40,
    fontWeight: 'bold',
  },
  output: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
