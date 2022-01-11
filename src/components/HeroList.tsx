import React, { useEffect, useState } from 'react'
import { getHeroes, HeroType } from 'utils/hero'
import HeroCard from 'components/HeroCard'
import { Wrapper } from 'components/Grid'

const HeroList = () => {
  const [list, setList] = useState<HeroType[]>([])
  useEffect(() => {
    getHeroes((data) => {
      setList(data)
    })
  }, [])
  return (
    <Wrapper display="grid" itemSpace="10px" colFrame={{ xs: 2, md: 4 }}>
      {list.map((hero, i) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </Wrapper>
  )
}

export default React.memo(HeroList)
