// PROPS
import { closeButtonProps } from "Props/Components/ModalProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const SiteCloseButton = (props: closeButtonProps) => (
    <div 
        className={`${props.type}-close cursor-pointer`}
        onClick={props.click}
    >
        <SiteIcon 
            type="times" 
            size="2x" 
        />
    </div>
)

export default SiteCloseButton