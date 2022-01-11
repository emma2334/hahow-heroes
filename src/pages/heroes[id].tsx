import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroProfile, patchHeroProfile, HeroProfileType } from 'utils/hero'
import Title from 'components/Title'
import HeroProfile from 'components/HeroProfile'

const Profile = () => {
  const params = useParams()
  const id = Number(params.id)
  const [profiles, setProfile] = useState<{ [key: string]: HeroProfileType }>(
    {}
  )
  const onSubmit = (id: number, profile: HeroProfileType) => {
    patchHeroProfile(id, profile, (result) => {
      if (result === 'OK') {
        setProfile((prev) => ({ ...prev, [id]: profile }))
        alert('更新成功！')
      } else {
        alert('更新失敗')
      }
    })
  }

  useEffect(() => {
    !profiles[id] &&
      getHeroProfile(id, (data) => {
        setProfile((prev) => ({ ...prev, [id]: data }))
      })
  }, [params.id])

  return (
    <>
      <Title>Profile</Title>
      {profiles[id] && (
        <HeroProfile id={id} profile={profiles[id]} onSubmit={onSubmit} />
      )}
    </>
  )
}

export default React.memo(Profile)
