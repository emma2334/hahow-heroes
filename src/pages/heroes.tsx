import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getHeroes, HeroType } from 'utils/hero'
import Title from 'components/Title'
import HeroList from 'components/HeroList'

const Hero = () => {
  const [list, setList] = useState<HeroType[]>([])

  useEffect(() => {
    getHeroes((data) => {
      setList(data)
    })
  }, [])

  return (
    <>
      <Title>Characters</Title>
      <HeroList list={list} />
      <Outlet context={list} />
    </>
  )
}

export default React.memo(Hero)
