import React,{useEffect} from 'react';
import Livre from './livre';
import Logado from './logado';
import {useAutenticacaoContext} from '../contexts/autenticacao';


const Rotas = ()=>{
  const {acesso} = useAutenticacaoContext();
  

  if(acesso){
    var RotasUser = Logado;
  }else{
    var RotasUser = Livre;
  }
  return (
    <RotasUser />
  )
}

export default Rotas;

