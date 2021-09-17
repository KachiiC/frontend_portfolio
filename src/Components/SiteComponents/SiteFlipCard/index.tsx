// CSS
import './SiteFlipCard.css'
// COMPONENTS
import { FlipBack, FlipFront } from './components/FlipSides'
// PROPS
import { SiteFlipCardProps } from 'Props/ComponentProps'


const SiteFlipCard = (props: SiteFlipCardProps) => {

    const {dimensions, front, back} = props

    const dimensionsLogic = dimensions ? dimensions : 300

    const styleLogic = {
        "width" :`${dimensionsLogic}px`, 
        "height" : `${dimensionsLogic}px`
    }
    
    return (
        <div className="flip-card" 
            style={styleLogic}
        >
            <div className="flip-card-inner">
                <FlipFront
                    image={front}
                    width={dimensionsLogic}
                    height={dimensionsLogic}
                />
                <FlipBack
                    content={back}
                />
            </div>
        </div>
    )
}

export default SiteFlipCard