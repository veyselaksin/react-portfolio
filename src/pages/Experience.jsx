import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IconSchool } from '@tabler/icons-react'
import { color } from '@mui/system'

function Experience() {
    const education = [
        {
            id: 1,
            title: 'Bachelor of Science in Computer Science',
            date: '2017 - 2021',
            icon: <IconSchool />,
            backgroundColor: '#3e497a',
            color: '#ffffff'
        },
        {
            id: 2,
            title: 'Bachelor of Science in Philosophy',
            date: '2017 - 2021',
            icon: <IconSchool />,
            backgroundColor: '#e9d35b',
            color: '#000000'
        },
        {
            id: 3,
            title: 'Bachelor of Science in Mathematics',
            date: '2017 - 2021',
            icon: <IconSchool />,
            backgroundColor: '#3e497a',
            color: '#ffffff'
        }
    ]
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                {education.map(item => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            className='vertical-timeline-element--education'
                            date={item.date}
                            iconStyle={{ background: item.backgroundColor, color: item.color }}
                            icon={item.icon}>
                            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Experience
