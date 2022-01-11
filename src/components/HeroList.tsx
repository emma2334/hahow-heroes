import React from 'react'
import { Link } from 'react-router-dom'
import { HeroType } from 'utils/hero'
import HeroCard from 'components/HeroCard'
import { Wrapper } from 'components/Grid'

interface PropType {
  list: HeroType[];
}

const HeroList = ({ list }: PropType) => {
  return (
    <Wrapper display="grid" itemSpace="10px" colFrame={{ xs: 2, md: 4 }}>
      {list.map((hero, i) => (
        <Link key={hero.id} to={`/heroes/${hero.id}`}>
          <HeroCard {...hero} />
        </Link>
      ))}
    </Wrapper>
  )
}

export default React.memo(HeroList)
