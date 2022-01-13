import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroProfile, patchHeroProfile, HeroProfileType } from 'utils/hero'
import Title from 'components/Title'
import HeroProfile from 'components/HeroProfile'
import Loader from 'components/Loader'

const Profile = () => {
  const params = useParams()
  const heroId = Number(params.heroId)
  const [profiles, setProfile] = useState<{ [key: string]: HeroProfileType }>(
    {}
  )
  const onSubmit = (id: number, profile: HeroProfileType) => {
    patchHeroProfile(heroId, profile, (result) => {
      if (result === 'OK') {
        setProfile((prev) => ({ ...prev, [heroId]: profile }))
        alert('更新成功！')
      } else {
        alert('更新失敗')
      }
    })
  }

  useEffect(() => {
    !profiles[heroId] &&
      getHeroProfile(heroId, (data) => {
        setProfile((prev) => ({ ...prev, [heroId]: data }))
      })
  }, [params.heroId])

  return (
    <>
      <Title>Profile</Title>
      {profiles[heroId]
        ? (
        <HeroProfile
          id={heroId}
          profile={profiles[heroId]}
          onSubmit={onSubmit}
        />
          )
        : (
        <Loader />
          )}
    </>
  )
}

export default React.memo(Profile)
