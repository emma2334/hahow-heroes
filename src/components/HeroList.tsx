import React, { useEffect, useState } from 'react'
import { getHeroes, HeroType } from 'utils/hero'
import HeroCard from 'components/HeroCard'
import { Row } from 'components/Grid'

const HeroList = () => {
  const [list, setList] = useState<HeroType[]>([])
  useEffect(() => {
    getHeroes((data) => {
      setList(data)
    })
  }, [])
  return (
    <Row display="grid" itemSpace="10px" gridCol={{ xs: 2, md: 4 }}>
      {list.map((hero, i) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </Row>
  )
}

export default React.memo(HeroList)
