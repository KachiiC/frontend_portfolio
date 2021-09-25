// CSS
import './SiteTimeline.css'
// PROPS
import { SiteTimelineProps } from "Props/Components/TimlineProps"
// COMPONENTS
import TimelineEvent from './components/TimelineEvent'

const SiteTimeline = (props: SiteTimelineProps) => {

    const {data, width} = props

    const widthLogic = width ? width : 100

    const displayEvents = data.map((event) => (
        <TimelineEvent
            key={event.event}
            event={event.event}
            year={event.year}
            description={event.description}
        />
    ))

    return (
        <div className={`timeline w-${widthLogic}`}>
            {displayEvents}
        </div>
    )
}

export default SiteTimeline