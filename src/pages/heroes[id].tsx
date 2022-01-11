import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroProfile, HeroProfileType } from 'utils/hero'
import Title from 'components/Title'
import HeroProfile from 'components/HeroProfile'

const Profile = () => {
  const params = useParams()
  const id = Number(params.id)
  const [profiles, setProfile] = useState<{ [key: string]: HeroProfileType }>(
    {}
  )

  useEffect(() => {
    !profiles[id] &&
      getHeroProfile(id, (data) => {
        setProfile((prev) => ({ ...prev, [id]: data }))
      })
  }, [params.id])

  return (
    <>
      <Title>Profile</Title>
      {profiles[id] && <HeroProfile profile={profiles[id]} />}
    </>
  )
}

export default React.memo(Profile)
