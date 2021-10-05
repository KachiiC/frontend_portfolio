// PROPS
import { antdCardProps, singleCardProps } from './AntdProps'
// CSS
import './AntdCards.css'
// COMPONENTS
import SingleCard from './components/SingleCard'

const AntdCards = (props: antdCardProps) => {

    const displayCards = props.data.map((card: singleCardProps) => {

        const { description, image, link, title } = card

        return (
            <SingleCard
                key={title}
                title={title}
                description={description}
                image={image}
                link={link}
            />
        )
    })

    return (
        <div className="antd-cards-container">
            {displayCards}
        </div>
    )
}

export default AntdCards