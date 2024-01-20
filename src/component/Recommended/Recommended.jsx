import React from 'react'
import RecommendedCard from './RecommendedCard'
import SectionTitle from '../SectionTitle'

const Recommended = () => {
  return (
    <div className="px-4 max-w-screen-xl">
      <SectionTitle title={'Recommended'} />
      <RecommendedCard></RecommendedCard>
    </div>
  )
}

export default Recommended