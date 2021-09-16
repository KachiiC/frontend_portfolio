// COMPONENTS
import { Card } from 'antd';
import { singleCardProps } from '../AntdProps';

const CardComponent = (props: singleCardProps) => {

    const { Meta } = Card;
    const {description, image, title} = props
    
    return (
        <Card cover={
            <img alt="example" src={`${image}`}/>
        }>
            <Meta
                title={title}
                description={description}
            />
        </Card>  
    )
}

export default CardComponent