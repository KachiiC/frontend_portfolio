// PROPS
import { TimelineEventProps } from "Props/ComponentProps"

const TimelineEvent = (props: TimelineEventProps) => (
    <div className="timeline-container">
        <div className="timeline-content site-border">
            <h3>{props.year}</h3>
            <h1>{props.event}</h1>
            <p>{props.description}</p>
        </div>
    </div>
)

export default TimelineEvent