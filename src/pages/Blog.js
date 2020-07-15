import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph \n ```hello```'

const content = require('../content/posts/2020-04-30-Answering-the-big-question-should-you-learn-SwiftUI-UIKit-or-both.md')

export default function Blog() {
    return (
        <React.Fragment>
            <ReactMarkdown source={content} />
        </React.Fragment>
    )
}
