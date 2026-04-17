const GerenciadorFaixa = ( {faixa, audioRef} ) => {

    return (
        <audio src={faixa} ref={audioRef}></audio>
    )
}

export default GerenciadorFaixa;