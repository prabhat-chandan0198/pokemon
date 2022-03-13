import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increasePokemonAction, deletePokemonAction} from '../Redux/Index';
const FirstScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [catColor, setcatColor] = useState('');
  const [description, setDescription] = useState('');
  const catList = useSelector(state => state.list);
  console.log(catList);
  const dis = useDispatch();

  const handleSubmit = () => {
    if (name == '') {
      alert('Please enter cat name');
    }
    if (breed == '') {
      alert('Please enter cat breed');
    }
    if (catColor == '') {
      alert('Please enter cat color');
    }
    if (description == '') {
      alert('Please enter cat description');
    }
    const data = {
      id: new Date().getMilliseconds(),
      name: name,
      breed: breed,
      color: catColor,
      description: description,
    };

    dis(increasePokemonAction(data));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>ADD POKEMON CATS</Text>
      <Image
        style={styles.image}
        source={require('../../asset/img/20118-5-pokemon-thumb.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={name => setName(name)}
          defaultValue={name}
          placeholder="Please enter name"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={breed => setBreed(breed)}
          defaultValue={breed}
          placeholder="Please enter breed"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={catColor => setcatColor(catColor)}
          defaultValue={catColor}
          placeholder="Please enter color"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={description => setDescription(description)}
          defaultValue={description}
          placeholder="Please enter description"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <TouchableOpacity style={styles.btnViewLogin} onPress={handleSubmit}>
          <View>
            <Text style={styles.loginText}>Add List</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnViewSignup}
          onPress={() => navigation.navigate('Home')}>
          <View>
            <Text style={styles.loginText}>Cat Lists</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#1d4e9e',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    color: 'yellow',
    fontSize: 15,
    width: 200,
    textAlign: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#fff',
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#fbc707',
    flexDirection: 'row',
  },
  btnViewSignup: {
    width: '50%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#1d4e9e',
    height: 45,
  },
  btnViewLogin: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
});
export default FirstScreen;
