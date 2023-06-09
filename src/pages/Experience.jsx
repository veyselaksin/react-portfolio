import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IconSchool } from '@tabler/icons-react'

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2017 - 2021'
                    iconStyle={{ background: '#3e497a', color: '#ffffff' }}
                    icon={<IconSchool />}>
                    <h3 className='vertical-timeline-element-title'>Bachelor of Science in Computer Science</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
