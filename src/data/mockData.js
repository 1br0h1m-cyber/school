import university1 from '../assets/university1.png'
import university2 from '../assets/university2.png'
import university3 from '../assets/university3.png'

import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'

import icon1 from '../assets/iconsearch.png'
import icon2 from '../assets/iconcalendar.png'
import icon3 from '../assets/iconhome.png'

const universityData = [
    {
        id:1,
        image:university1,
        title:'Stanford University'
    },
    {
        id:1,
        image:university2,
        title:'Stallion University'
    },
    {
        id:1,
        image:university3,
        title:'Covenant University'
    }
]

const coursesData = [
    {
        id:1,
        image:course1,
        title:'User Experience Design'
    },
    {
        id:1,
        image:course2,
        title:'Computer Science'
    },
    {
        id:1,
        image:course3,
        title:'Business Managment'
    }
]

const communityData = [
    {
        id:1,
        image:icon1,
        title:'Find a Course',
        text:'Search by subject, course or region to find the right course for you.'
    },
    {
        id:2,
        image:icon2,
        title:'Find a University',
        text:'Search for universities to find out about courses and more information.'
    },
    {
        id:3,
        image:icon3,
        title:'Find an Open Day',
        text:'Search and book open days to help you make the right choice.'
    }
]

export {universityData, coursesData, communityData}