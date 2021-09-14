// PROPS
import { antdCardProps, singleCardProps } from './AntdProps'
// CSS
import './AntdCards.css'
// COMPONENTS
import SingleCard from './components/SingleCard'

const AntdCards = (props: antdCardProps) => {

    const displayCards = props.data.map((card: singleCardProps) => (
        <SingleCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
        />
    ))

    return (
        <div className="antd-cards-container">
            {displayCards}
        </div>
    )
}

export default AntdCards