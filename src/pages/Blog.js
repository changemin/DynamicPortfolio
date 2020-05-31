import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph \n* hello'

export default function Blog() {
    return (
        <React.Fragment>
            <ReactMarkdown source={input} />
        </React.Fragment>
    )
}
