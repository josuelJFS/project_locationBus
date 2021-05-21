
import React, { useState, useEffect,useRef } from 'react';
import { Animated,Platform, Text, View, StyleSheet,Alert,StatusBar,FlatList,Image,Modal,TouchableOpacity,ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts,Roboto_900Black,Roboto_400Regular  } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Entypo';
import AppLoading from 'expo-app-loading';
import AxiosApi from '../service/apiAxios';
import {useAutenticacaoContext} from '../contexts/autenticacao';


interface props{
  navigation:any
}

export type infosModal = {
  id:number,
  titulo:string,
  descricao:string,
  url_img:string,
  categoria:string,
  data_postagem:string,
  data_lancamento:string,
  elenco:string,
  class_indicativa:string,
  url_video:string
}


const App:React.FC<props> = ({navigation})=> {

  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular
  });

  

  const [modalActive,setModalActive] = useState<boolean>(false);
  const [verif,setVerif] = useState<number>(0);
  const [play,setPlay] = useState<boolean>(false);
  const [informationModal,setInformationModal] = useState<infosModal>({} as infosModal);
  const [filmes,setFilmes] = useState<Array<infosModal>>([]);
  const {setRotation,rotation} = useAutenticacaoContext();
 

  useEffect(()=>{
    if(play == true && informationModal.id>0){
      setModalActive(false);
      setTimeout(() => {        
        if(!modalActive){
        navigation.navigate('playvideo',{filmes:informationModal});
        setPlay(false);
        }else{
          setVerif(verif+1);
        }
      }, 500);
      
    }

  },[play,verif])

  


  useEffect(()=>{
    Filmes()
  
    
  },[])

  if(rotation){
    setRotation(false);
  }

  

  async function Filmes(){
    try {
        const resultado = await AxiosApi.get('filmes/recente');
        setFilmes(resultado.data.result);
    } catch (error) {
      //@ts-ignore
      alert('error  oa carregar filmes');
      console.log(error)
    }
  }


  

  function modalInsertInformation(item:any){
    setInformationModal(item);
  }


   //@ts-ignore
  const renderItem =  ({item} ) => {
    
     return (
        <TouchableOpacity onPress={()=>{modalActive?setModalActive(false):setModalActive(true);modalInsertInformation(item)}} style={{width:108,height:162,margin:5}}>
          <Image style={{resizeMode: 'contain',flex:1}} source={{uri:item.url_img}}/>
        </TouchableOpacity>   
     )
    
  }

  if (!fontsLoaded && Roboto_400Regular) {
    return <AppLoading />;
  }


  return (
    <View style={styles.background}>

      <View style={styles.top}>
        <View style={styles.topMenu}>
          <Icon size={wp(10)} name="menu" color="#fff"/>
        </View>
        <View style={styles.topNameLogo}>
          <Text style={styles.topNamelogoText}>PlayON</Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.NameCategory}>Filmes</Text>
          <FlatList 
              data={filmes}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          />
        </View>

      </View>


      <View style={{marginTop:20}}>
        <View>
          <Text style={styles.NameCategory}>Série (EM BREVE)</Text>
          {/* <FlatList 
              data={filmes}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          /> */}
        </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalActive}
            onRequestClose={() => {
            
            }}
          >
            <View style={styles.modal}>
              <View  style={styles.conteudoModal}>
                <View style={styles.topDescription}>
                  <View style={styles.topDescriptionPoster}>
                    <Image style={{resizeMode: 'contain',flex:1}} source={{uri:informationModal.url_img}} />
                  </View>
                  <ScrollView style={styles.topDescriptionText}>
                    <Text style={{color:'#fff',padding:8,fontSize:18,fontWeight:"bold",textAlign:'center'}}>{informationModal.titulo}</Text>
                    <Text style={{color:'#fff',padding:8}}>{informationModal.descricao}</Text>
                  </ScrollView>
                </View>
                <View style={styles.bottomDEscription}>
                  <TouchableOpacity onPress={()=>setPlay(true)} style={styles.buttomAsistir}>
                    <Text style={{fontSize:25,color:"#fff",textAlign:"center",fontFamily:"Roboto_400Regular"}}>Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setModalActive(false)} style={styles.buttomVolta}>
                    <Icon size={wp(10)} name="chevron-down" color="#fff"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>   

        
      </View>

      

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
  background:{
    backgroundColor:"#141515",
    flex:1
  },
  top:{
    width:"100%",
    height:80,
    flexDirection:"row",
    marginTop:StatusBar.currentHeight
  },
  topMenu:{
    width:50,
    justifyContent:"center",
    alignItems:"center"
  },
  topNameLogo:{
    flex:1,
    justifyContent:"center",
  },
  topNamelogoText:{
    textAlign:"center",
    color:'#fff',
    fontSize:wp(6),
    fontFamily:"Roboto_900Black"

  },
  NameCategory:{
    color:"#fff",
    fontSize:24,
    fontFamily:"Roboto_400Regular",
    marginLeft:10
  },
  modal:{
    flex:1
  },
  conteudoModal:{
    width:"100%",
    height:"50%",
    backgroundColor:"#141515",
    position:"absolute",
    bottom:0,
    padding:8
  },
  topDescription:{
    flexDirection:"row",
    flex:0.7
  },
  topDescriptionPoster:{
    width:wp(35),
    height:'85%'
  },
  topDescriptionText:{
    flex:1,
  },
  bottomDEscription:{
    flex:0.3
  },
  buttomAsistir:{
    flex:1,
    backgroundColor:"#A72121",
    marginBottom:7,
    borderRadius:10,
    justifyContent:"center"
  },
  buttomVolta:{
    flex:1,
    backgroundColor:"#2B2A2A",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  }
});


export default App;
