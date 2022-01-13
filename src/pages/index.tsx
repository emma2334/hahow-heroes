import React, { useEffect, useState } from 'react'
import Markdown from 'components/Markdown'
import Loader from 'components/Loader'

const Home = () => {
  const [readme, setReadme] = useState<string>('')

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/emma2334/hahow-heroes/master/README.md'
    )
      .then((e) => e.text())
      .then((data) => {
        setReadme(data)
      })
      .catch((e) => {
        console.warn(e)
        setReadme('404: Not Found')
      })
  }, [])

  return readme ? <Markdown content={readme} /> : <Loader />
}

export default React.memo(Home)
