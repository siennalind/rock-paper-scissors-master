import OptionsMap from './OptionsMap'
import PaperPiece from './PaperPiece'
import RockPiece from './RockPiece'
import ScissorsPiece from './ScissorsPiece'

function StartScreen () {
    return (
        <>
            <OptionsMap />
            <PaperPiece />
            <RockPiece />
            <ScissorsPiece />
        </>
    )
}

export default StartScreen