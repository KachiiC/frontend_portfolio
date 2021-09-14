// PROPS
import { AntdTabsProps} from './AntdTabsProps'
// CSS
import 'antd/dist/antd.css';
import './AntdTabs.css'
// COMPONENTS
import { Tabs } from 'antd';
import SingleTab from './components/SingleTab';

const AntdTabs = (props: AntdTabsProps) => {

    const { TabPane } = Tabs;

    const sizeLogic = props.size ? props.size : "small"
    const positionLogic = props.position ? props.position : "top"
    
    const renderTabs = props.data.map(tab =>
        <TabPane 
            key={tab.title}
            tab={tab.title} 
        >
            <SingleTab
                title={tab.title}
                content={tab.content}
                description={tab.description}
            />
        </TabPane>
    )

    return (
        <Tabs 
            tabPosition={positionLogic}
            centered
            defaultActiveKey="0"
            size={sizeLogic}
            type="card"
        >
            {renderTabs}
        </Tabs>
    )
}

export default AntdTabs