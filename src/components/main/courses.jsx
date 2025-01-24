import React from 'react'

//data
import { coursesData } from '../../data/mockData'

//components
import Title from '../ui/title'
import Card from '../ui/card'
import Button from '../ui/button'

//icon
import { GoArrowRight } from "react-icons/go";


const Courses = () => {
  return (
    <div id='courses'>
      <Title text={'Most Popular Courses'}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-7 lg:px-10">

        {coursesData.map((data, index) => (
          <Card key={index} data={data} />
        )) }

      </div>
      <div className='flex justify-center py-3 lg:py-4'>
        <Button v2={true} text={'see all'} icon={<GoArrowRight/>}/>
      </div>
    </div>
  )
}

export default Courses