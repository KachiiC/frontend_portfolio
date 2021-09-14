// COMPONENTS
import { Card } from 'antd';
import { singleCardProps } from '../AntdProps';

const CardComponent = (props: singleCardProps) => {

    const { Meta } = Card;
    
    return (
        <Card cover={
            <img alt="example" src={`${props.image}`}/>
        }>
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>  
    )
}

export default CardComponent