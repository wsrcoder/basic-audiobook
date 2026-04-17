import { useState, useRef, useEffect, use } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Capa from './Capa'
import SeletorCapitulos from './SeletorCapitulos'
import BotoesControle from './BotoesControle'

import img_capa from './assets/bras_cubas.jpeg'

import playlistBrasCubas from './livro/faixas_bras_cubas'
import GerenciadorFaixa from './GerenciadorFaixa'


function App() {

  const [botaoPlayPause, setBotaoPlayPause] = useState(false);
  const [faixaAtual, setFaixaAtual] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {

    if(botaoPlayPause) {
      playTrack();
    }
    else {
      pauseTrack();
    }

  }, [faixaAtual])

  const informacoesLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    editora: "Penguin-Companhia",
    ano: 1881,
    totalCapitulos: 2,
    capitulos: playlistBrasCubas.map(faixa => faixa.arquivo),
    imagemCapa: img_capa,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas, de Machado de Assis'
  };



  const playTrack = () => {
    if (botaoPlayPause) {
      audioRef.current.pause();
      setBotaoPlayPause(false);
    } else {
      audioRef.current.play();
      setBotaoPlayPause(true);
    }
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setBotaoPlayPause(false);
  }

  const advanceTrack = () => {
    if (faixaAtual < informacoesLivro.totalCapitulos - 1) {
      setFaixaAtual(faixaAtual + 1);
      setBotaoPlayPause(false);
    }
  }

  const goBackTrack = () => {
    if (faixaAtual > 0) {
      setFaixaAtual(faixaAtual - 1);
      setBotaoPlayPause(false);
    }
  }




  return (
    <>
      <Capa 
        imagemCapa={informacoesLivro.imagemCapa} 
        textoAlternativo={informacoesLivro.textoAlternativo} 
      />

      <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]}
                        audioRef={audioRef} />
      <BotoesControle  
            botaoPlayPause = {botaoPlayPause} 
            setBotaoPlayPause = {setBotaoPlayPause}
            playTrack = {playTrack}
            advanceTrack = {advanceTrack}
            goBackTrack = {goBackTrack}
      />
    </>
  )
}

export default App
