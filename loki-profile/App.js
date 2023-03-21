import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.bb961a61515c143c30cf73db13969e03?rik=lwYqZ3VIBa1vUA&pid=ImgRaw&r=0',
              }}
              style={styles.avatar}
            />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Loki Laufeyson</Text>
          <Text  style={styles.subtitle}>Rei de Asgard</Text>
        </View>
      </View>
      <ScrollView style={styles.scrool}>
           <Text style={styles.question}> • Loki é heroi, vilão ou anti-heroi ? </Text>
            <Image
                source={{
                uri: 'https://th.bing.com/th/id/R.a63c26190a0541fe32bf5a2f32ed0c38?rik=UPM8UNDSX4%2bwPw&pid=ImgRaw&r=0',
              }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Cite uma característica do Loki</Text>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/7e/1a/2d/7e1a2d99ae39095a914a4e149954c3d1--loki-costume-loki-cosplay.jpg',
              }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Cite um filme com o loki </Text>
              <Image
                 source={{
                  uri: 'https://images.hdqwalls.com/wallpapers/loki-the-god-mischief-el.jpg',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Qual você acha que seria o MBTI do Loki ? </Text>
              <Image
                 source={{
                  uri: 'https://th.bing.com/th/id/OIP.49mSmBDcm0E9ExBJ_pvKnwHaEK?pid=ImgDet&rs=1',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
              <Text style={styles.question}> • Loki ou Sylvie ? </Text>
              <Image
                 source={{
                  uri: 'https://s.hdnux.com/photos/01/21/00/53/21236472/6/1200x0.jpg',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Qual seu loki favorito ? </Text>
              <Image
                 source={{
                  uri: 'https://th.bing.com/th/id/R.da35dbdac4968bdaaeab099d30b17c2a?rik=cmr%2bDWNHY%2fdPHw&pid=ImgRaw&r=0',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    paddingTop: 28,
    paddingLeft: 80,
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  profile: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    display: 'flex',
    borderColor: '#2B5C56',
    borderWidth: 1,
    backgroundColor: '#23232a'
  },
  fig: {
    width: 350,
    height: 160,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingTop: 10,
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat'
  },
  subtitle:{
    paddingTop: 10,
    color: '#3C8E83',
    fontSize: 14
  },
  text:{
    color: 'white',
  },
  question:{
    paddingTop: 11,
    color: 'white',
    height: 40,
    borderColor: '#2B5C56',
    backgroundColor: '#3C8E83',
    borderWidth: 1,
  },
  description: {
    width: 300,
    height: 150,
    marginLeft: 80,
    alignItems: 'center',
    padding:50,
    paddingRight: 130,
    color: 'green',
    backgroundColor: '#23232a'
  },
  TextInput: {
    color: 'white',
    height: 50,
    borderColor: '#2B5C56',
    borderWidth: 1,
  },
  scrool:{
    backgroundColor: '#23232a',  // 2B5C56
    marginLeft: 1,
  }
});

