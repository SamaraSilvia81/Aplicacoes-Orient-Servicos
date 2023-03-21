![CalculadorPush]()
<br><br><br>
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Calculator+Push+!;React+Native+e+Expo+Go&pause=1000&color=3C8E83&width=435)](https://git.io/typing-svg)

## Projeto Inicial de React Native - Calculator Push
![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=3C8E83&style=for-the-badge)
> Esse mine projeto mobile é voltado para aprimorar mais os conhecimentos de React Native, agora envolvendo lógicas JS e uso de bibliotecas externas como o react paper.

<br>

- **View** - É o componente fundamental para construir a interface do usuário. Ele é semelhante a uma div no HTML, permitindo a criação de caixas, containers e layout.
- **ScrollView** - É um componente que permite a criação de uma área de rolagem em seu conteúdo. É útil quando você tem uma grande quantidade de conteúdo que não cabe na tela.
- **Text** - É um componente que permite a exibição de texto na interface do usuário. Ele suporta vários estilos de formatação de texto, como negrito, itálico e sublinhado.
- **TextInput** - É um componente que permite a exibição de texto na interface do usuário. Ele suporta vários estilos de formatação de texto, como negrito, itálico e sublinhado.
- **StyleSheet** - É um objeto que permite a criação de estilos para componentes. É semelhante ao CSS no HTML e é usado para definir as propriedades visuais dos componentes.

## Deploy Surge
 - `Link do Projeto:` https://snack.expo.dev/@samarasilvia81/calculator-push
 
## Instalando o Projeto

Se você já tiver na sua máquina o node js, então será preciso fazer um clone no projeto, digitando no seu terminal o comando `git clone`. E depois você precisa reinstalar as dependências com o comando `npm i` e, por fim, apenas dar o comando de inicío para abrir o QR Code, no qual você vai colocar no app Expo Go. O comando é `npx expo start --tunnel`.

## Explicando o Projeto 

Criamos uma view (div) pai, porque o app vai renderizar apenas uma única página (single page). E dentro dessa view pai, colocamos nossas imagens, textos e um input sem resposta, apenas para preencher.

Para a parte do "profile" separamos duas views, uma específica para a imagem do Loki e outra para sua descrição, dessa forma poderemos fazer um "flex". 

Para o scrollView foi usado apenas a própria view do scroll + "view", e dentro dela ordenamos os nossos dados como: Texto + Imagem + Input.

## Lógica JS

- **useState e sumValues()**

```js

const [total, setTotal] = useState(0);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  const sumValues = (x, y) => {
    return x + y;
  };
  
```

- **Aplicação no Return**

```js

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

```
  
## StyleSheet

A aplicação do CSS em React Mobile não se difere muito do css normal, tendo apenas um aspecto que é se assemelha a estrutura de objeto, além do fato de que cada propriedade que antes era separada por "-" segue a lógica de `camelCase`.

```css
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
```
