// PROPS
import { StoreDataProps } from "Props/Api/StoreDataProps"

const StoreData = (data: StoreDataProps[]) => {

    return data.map((item) => {

        return {
            title: item.name,
            description: `£${item.price}`,
            image: item.product_thumbnail,
            link: item.product_link,
            link_type: 'external'
        }
    }).slice(0,8)
}



export default StoreData