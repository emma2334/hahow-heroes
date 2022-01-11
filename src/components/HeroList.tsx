import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HeroType } from 'utils/hero'
import HeroCard from 'components/HeroCard'
import { Wrapper } from 'components/Grid'

interface PropType {
  active?: number | string;
  list: HeroType[];
}

const List = styled(Wrapper)`
  ${({ active }: { active?: number | string }) =>
    css`
      > :not(:nth-child(${active})) {
        opacity: 0.6;
        transition-duration: 0.4s;
        :hover {
          opacity: 1;
        }
      }
    `}
`

const HeroList = ({ active, list }: PropType) => {
  return (
    <List
      active={active}
      display="grid"
      itemSpace="10px"
      colFrame={{ xs: 2, md: 4 }}
    >
      {list.map((hero, i) => (
        <Link key={hero.id} to={`/heroes/${hero.id}`}>
          <HeroCard {...hero} />
        </Link>
      ))}
    </List>
  )
}

export default React.memo(HeroList)
