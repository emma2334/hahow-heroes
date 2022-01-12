import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Title from 'components/Title'
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
      })
  }, [])

  return readme
    ? (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <Title>{children}</Title>
      }}
    >
      {readme}
    </ReactMarkdown>
      )
    : (
    <Loader />
      )
}

export default React.memo(Home)
