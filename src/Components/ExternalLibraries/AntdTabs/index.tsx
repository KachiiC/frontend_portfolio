// PROPS
import { AntdTabsProps } from './AntdTabsProps'
// CSS
import 'antd/dist/antd.css';
import './AntdTabs.css'
// COMPONENTS
import { RenderLogic } from 'Tools/FunctionTools';
import SingleTab from './components/SingleTab';
import { Tabs } from 'antd';

const AntdTabs = (props: AntdTabsProps) => {

    // PROPS
    const { TabPane } = Tabs;
    const { data, position, size } = props
    
    const renderTabs = data.map(tab =>
        <TabPane 
            key={tab.title}
            tab={tab.title} 
        >
            <SingleTab
                link={tab.link}
                title={tab.title}
                content={tab.content}
                description={tab.description}
            />
        </TabPane>
    )

    return (
        <Tabs 
            centered
            defaultActiveKey="0"
            size={RenderLogic(size, "small")}
            tabPosition={RenderLogic (position, "top")}
            type="card"
        >
            {renderTabs}
        </Tabs>
    )
}

export default AntdTabs