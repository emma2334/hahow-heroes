import React, { useEffect, useState } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { getHeroes, HeroType } from 'utils/hero'
import Title from 'components/Title'
import HeroList from 'components/HeroList'
import Loader from 'components/Loader'

const Heroes = () => {
  const params = useParams()
  const [list, setList] = useState<HeroType[]>([])

  useEffect(() => {
    getHeroes((data) => {
      setList(data)
    })
  }, [])

  return (
    <>
      <Title>Characters</Title>
      {!list.length && <Loader />}
      <HeroList active={params.id} list={list} />
      <Outlet context={list} />
    </>
  )
}

export default React.memo(Heroes)
