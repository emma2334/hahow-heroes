import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Content from 'components/Content'
import { Wrapper as DefaultWrapper, Grid } from 'components/Grid'
import { HeroProfileType } from 'utils/hero'

const Wrapper = styled(Content)`
  padding: 30px;
  * {
    font-size: 1.5rem;
  }
`

const Button = styled.button`
  min-width: 2rem;
  border: 1px solid #fff;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
    background: #e62429b0;
  }
`
const Column = styled(Grid)`
  &.result {
    margin-top: auto;

    .remain {
      margin: 50px 0 15px;
    }

    ${Button} {
      padding: 5px 20px;
    }
  }
`

const Skill = styled(DefaultWrapper)`
  align-items: center;
  text-transform: uppercase;
  :not(:last-child) {
    margin-bottom: 1rem;
  }

  .manage {
    display: inline-flex;
    justify-content: space-between;
  }
`

interface PropType {
  profile: HeroProfileType;
}

const HeroProfile = ({ profile }: PropType) => {
  const [remain, setRemain] = useState<number>(0)
  const [profileState, setProfile] = useState<HeroProfileType>(profile)

  useEffect(() => {
    setProfile(profile)
    setRemain(0)
  }, [profile])

  const onClick = (type: keyof HeroProfileType, calc: number) => {
    if ((calc < 0 && profileState[type] < 1) || remain < calc) return
    setRemain(remain - calc)
    setProfile({ ...profileState, [type]: profileState[type] + calc })
  }

  return (
    <Wrapper>
      <Column col={{ md: 6 }}>
        {(Object.keys(profileState) as Array<keyof HeroProfileType>).map(
          (e) => (
            <Skill className="skill" key={e}>
              <Grid col={{ xs: 3 }}>{e}</Grid>
              <Grid className="manage" col={{ xs: 9 }}>
                <Button onClick={() => onClick(e, -1)}>-</Button>
                {profileState[e]}
                <Button onClick={() => onClick(e, 1)}>+</Button>
              </Grid>
            </Skill>
          )
        )}
      </Column>
      <Column className="result" col={{ md: 6 }} align="right">
        <div className="remain">Remain points: {remain}</div>
        <Button>Save</Button>
      </Column>
    </Wrapper>
  )
}

export default React.memo(HeroProfile)
