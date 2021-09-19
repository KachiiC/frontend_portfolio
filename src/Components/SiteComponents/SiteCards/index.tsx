// CSS
import './SiteCard.css'
// COMPONENTS
import { SingleCard } from "./components/SingleCard"
import { GridSpanSwitcher } from 'Tools/GridTools'
import { SiteCardProps } from 'Props/ComponentProps'

const SiteCards = (props: SiteCardProps) => {

    const { card_size , data } = props
    
    const displayCards = data.map((data: any) => (
        <SingleCard
            image={data.image}
            title= {data.title}
            description={data.description}
            span={GridSpanSwitcher(card_size)}
        />
    ))

    return (
        <div className="site-grid-system site-card-grid">
            {displayCards}
        </div>
    )
}

export default SiteCards