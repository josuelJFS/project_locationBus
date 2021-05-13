import React,{createContext,useContext,useState,useEffect,useCallback} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Icontext{
    acesso?: boolean;
   
}




const AutenticacaoContext = createContext<Icontext>({} as Icontext);

const AutenticacaoProvider:React.FC = ({children})=>{
    const [acesso,setAcesso] = useState<boolean>(true);


   
    
    return (
        <AutenticacaoContext.Provider value={{acesso}}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

const useAutenticacaoContext = ()=>{
    const context = useContext(AutenticacaoContext);
    const {acesso} = context;
    return {acesso};
}

export {AutenticacaoProvider,useAutenticacaoContext}

