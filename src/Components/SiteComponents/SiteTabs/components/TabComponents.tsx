import { TabContentProps, TabLinkProps } from "Props/ComponentProps"

export const TabLink = (props: TabLinkProps) => (
    <div className="site-tab-link cursor-pointer"
        onClick={props.click}
    >
        {props.title}
    </div>
)

export const TabContent = (props: TabContentProps) => (
    <div className="site-tab-content site-border">
        {props.content}
    </div> 
)