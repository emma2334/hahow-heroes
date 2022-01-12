import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Title from 'components/Title'

const ListItem = styled.li`
  line-height: 2rem;
`

interface PropType {
  content: string;
}

const Markdown = ({ content }: PropType) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <Title>{children}</Title>,
        li: ({ children }) => <ListItem>{children}</ListItem>,
        code ({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '') || []
          return !inline
            ? (
            <SyntaxHighlighter language={match[1]} PreTag="div">
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
              )
            : (
            <code>{children}</code>
              )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default React.memo(Markdown)
