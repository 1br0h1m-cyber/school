import React from 'react'

//data
import { universityData } from '../../data/mockData'

//components
import Title from '../ui/title'
import Card from '../ui/card'
import Button from '../ui/button'

//icon
import { GoArrowRight } from "react-icons/go";

const University = () => {
  return (
    <div id='university'>
      <Title text={'Top ranking Universities'}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-7 lg:px-10">

        {universityData.map((data, index) => (
          <Card key={index} data={data} />
        )) }

      </div>
      <div className='flex justify-center py-3 lg:py-4'>
        <Button v2={true} text={'see all'} icon={<GoArrowRight/>}/>
      </div>
    </div>
  )
}

export default University