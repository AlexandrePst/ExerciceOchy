import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Keyboard,
} from 'react-native';
import Athlete from './components/Athlete';
import React, {useState} from 'react';
import {runners} from './assets/athletes.json';

export default function App() {
  //Fonction de validation d'un email avec regex
  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };
  //States pour la liste
  const [athlete, setAthlete] = useState();
  const [athleteItems, setAthleteItems] = useState([]);

  //States pour la barre de recherche
  const [text, onChangeText] = useState(null);

  //States pour les messages de réussite
  const [msgStatus, setMsgStatus] = useState(false);

  //Fonction d'ajout d'un athlète à la liste
  const handleAddAthlete = text => {
    if (text !== '' && validate(text)) {
      Keyboard.dismiss();
      setAthleteItems([...athleteItems, athlete]);
      setAthlete(null);

      let newRunner = {
        name: 'John Doe',
        email: text,
        photo: 'https://i.ibb.co/2kLKNFX/pexels-frank-cone-2291874.jpg',
      };
      runners.push(newRunner);

      setMsgStatus(true);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Premier titre */}
        <Text style={styles.title}>Athletes</Text>

        {/* Barre de recherche */}
        <View style={styles.shearchBar}>
          <View style={styles.leftPartOfSearchBar}>
            <Image
              source={require('./assets/icons/loupe.png')}
              style={styles.loupe}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Add an athlete"
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleAddAthlete(text)}>
            <Image
              source={require('./assets/icons/accept.png')}
              style={styles.accept}
            />
          </TouchableOpacity>
        </View>

        {/* Message de succès lors de l'ajout d'un athlète */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setMsgStatus(false)}>
          <Text style={msgStatus ? styles.msgIsDisplay : styles.msgHidden}>
            L’athlète à bien été ajouté à votre liste
          </Text>
        </TouchableOpacity>

        {/* Deuxième titre */}
        <Text style={[styles.title, styles.title2]}>My Athletes</Text>

        {/* Séparateur */}
        <View style={styles.separator} />
        {/* Liste des athlètes */}
        <View>
          <FlatList
            data={runners}
            renderItem={({item}) => (
              <Athlete email={item.email} name={item.name} image={item.photo} />
            )}
            keyExtractor={item => item.email}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title2: {
    marginTop: 30,
  },
  separator: {
    width: '100%',
    backgroundColor: 'black',
    height: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  shearchBar: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  loupe: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  accept: {
    width: 20,
    height: 20,
  },
  leftPartOfSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgIsDisplay: {
    backgroundColor: '#CCF4E1',
    padding: 10,
    borderRadius: 6,
    color: '#0A7C52',
  },
  msgHidden: {
    display: 'none',
  },
  txtMsgStatus: {
    color: '#0A7C52',
  },
  input: {
    color: 'black',
    width: '70%',
  },
});
