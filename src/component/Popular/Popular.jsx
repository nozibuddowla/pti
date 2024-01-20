import React from 'react'
import SectionTitle from '../SectionTitle'
import PopularCard from './PopularCard'

const Popular = () => {
  return (
    <div className="px-4 max-w-screen-xl">
        <SectionTitle title={"Popular"}></SectionTitle>
        <PopularCard></PopularCard>
    </div>
  )
}

export default Popular