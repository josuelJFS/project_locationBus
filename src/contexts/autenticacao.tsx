import React,{createContext,useContext,useState,useEffect,useCallback} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';


export interface Icontext{
    acesso?: boolean;
    setRotation:(e:boolean) => void;
    rotation:boolean;
   
}



const AutenticacaoContext = createContext<Icontext>({} as Icontext);

const AutenticacaoProvider:React.FC = ({children})=>{
    const [acesso,setAcesso] = useState<boolean>(true);
    const [rotation,setRotation] = useState<boolean>(false);


    useEffect(()=>{
        if(rotation){
            async function changeScreenOrientation() {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
            }
              changeScreenOrientation();
        }else{
            async function changeScreenOrientation() {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            }
              changeScreenOrientation();
        }
    },[rotation])

   
    
    return (
        <AutenticacaoContext.Provider value={{acesso,setRotation,rotation}}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

const useAutenticacaoContext = ()=>{
    const context = useContext(AutenticacaoContext);
    const {acesso,setRotation,rotation} = context;
    return {acesso,setRotation,rotation};
}

export {AutenticacaoProvider,useAutenticacaoContext}

