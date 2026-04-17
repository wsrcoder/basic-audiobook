
const BotoesControle = (props) => {
    return (
        <div className="botoes-controle">
            <button onClick={props.goBackTrack}>
                <i className="bi bi-skip-start"></i>
            </button>
            <button onClick={props.playTrack}>
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <button onClick = {props.playTrack}>
                <i className={`bi bi-${props.botaoPlayPause ? 'pause' : 'play'}-circle-fill`}></i>
            </button>
            <button>
                <i className="bi bi-arrow-clockwise"></i>
            </button>
            <button onClick={props.advanceTrack}>
                <i className="bi bi-skip-end"></i>
            </button>
        </div>
    )
}

export default BotoesControle;