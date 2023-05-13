import { StatusBar, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
	const [peso, setPeso] = useState();
	const [altura, setAltura] = useState();
	const [resultado, setResultado] = useState(0);
	const [texto, setTexto] = useState("");
	
	function calcular(){
		let resultado = peso / (altura * altura);
		let texto = "";
		if(resultado <= 16.9){
			texto = ("Muito abaixo do Peso");
			setTexto(texto);
		}else if(resultado <= 18.4){
			texto = ("Abaixo do Peso");
			setTexto(texto);
		}else if(resultado <= 24.9){
			texto = ("Peso Normal");
			setTexto(texto);
		}else if(resultado <= 29.9){
			texto = ("Acima do Peso");
			setTexto(texto);
		}else if(resultado <= 34.9){
			texto = ("Obesidade Grau I");
			setTexto(texto);
		}else if(resultado <= 40){
			texto = ("Obesidade Grau II");
			setTexto(texto);
		}else if(resultado > 40){
			texto = ("Obesidade Grau III");
			setTexto(texto);
		}
		setResultado(resultado.toFixed(2));
	}
	
	function limpar(){
		setResultado("");
		setAltura("");
		setPeso("");
	}
  return (
    <View style={styles.container}>
		<View style={styles.titulo}>
			  <Text style={styles.txtTitulo}>CANCULADORA IMC</Text>
		</View>
		  
		<View style={styles.blocoImg}>
			<Image style={styles.Img} source={require('./assets/img.jpg',)}/>
		</View>
		  
		<View style={styles.bloco}>
			<Text style={styles.Label}>Peso:</Text>
			<TextInput maxLength={6} style={styles.txtInput} placeholder="Insirar seu Peso" keyboardType="numeric" value={peso} onChangeText={(value)=>setPeso(value)}/>
			
			<Text style={styles.Label}>Altura:</Text>
			<TextInput maxLength={4} style={styles.txtInput} placeholder="Insirar seu Peso" keyboardType="numeric" value={altura} onChangeText={(value)=>setAltura(value)}/>
		</View>
		  
		<View style={styles.bloco1}>
			<TouchableOpacity style={styles.button} onPress={calcular} >
        		<Text>Calcular</Text>
      		</TouchableOpacity>
			
			<TouchableOpacity style={styles.button} onPress={limpar}>
        		<Text>Limpar</Text>
      		</TouchableOpacity>
		</View>
		  
		<View style={styles.bloco}>
			<Text  style={styles.Label}>
				Resultado: {resultado}
			</Text>
			<Text  style={styles.Label}>
				{texto}
			</Text>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	backgroundColor:'#fff'
  },
	titulo: {
		backgroundColor: '#ffa500',
		height:'10%',
		justifyContent:'center'
	},
	txtTitulo: {
		fontSize: 20,
		textAlign:'center',
		color:'#fff'
	},
	Img: {
		width: 200,
		height: 200,
		borderRadius:10
	},
	blocoImg: {
		alignItems: 'center',
		marginTop: 30
	},
	bloco: {
		marginTop: 10,
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center' 
	},
	txtInput:{
		backgroundColor:'#fff',
		marginTop: 10,
		width: 200,
		borderRadius:5,
		borderWidth:1,
		fontSize: 20,
		marginBottom: 15,
	},
	Label: {
		backgroundColor:'#fff',
		marginTop: 10,
		marginBotton: 10,
		width: 300,
		fontSize: 20
	},
	bloco1: {
		flexDirection: 'row',
		backgroundColor: '#ffa500',
		textAlign:'center',
		justifyContent:'center',
	},
	button:{
		backgroundColor:'#fff',
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 15,
		width: 150,
		borderRadius:5,
		borderWidth:1,
	}
});
