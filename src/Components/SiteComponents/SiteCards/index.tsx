// CSS
import './SiteCard.css'
// PROPS
import { SiteCardProps } from 'Props/Components/CardProps'
// TOOLS
import { GridSpanSwitcher } from 'Tools/GridTools'
// COMPONENTS
import SingleCard from "./components/SingleCard"

const SiteCards = (props: SiteCardProps) => {

    const { card_size , data } = props
    
    const displayCards = data.map(card => (
        <SingleCard
            link={card.link}
            link_type={card.link_type}
            image={card.image}
            title= {card.title}
            description={card.description}
            span={GridSpanSwitcher(card_size)}
        />
    ))

    return (
        <div className="site-grid-system">
            {displayCards}
        </div>
    )
}

export default SiteCards