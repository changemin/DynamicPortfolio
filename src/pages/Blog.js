import React from 'react'
import ReactMarkdown from 'react-markdown'

const source = `
# 제목 1
### 테이블
|제목|내용|
|---|---|
|리액트|마크다운|

\`\`\`
코드블럭
\`\`\`

**굵게**  
*기울이기* 

> 인용문  

글자 \`강조\` 하기`;
// const content = require('../content/posts/2020-04-30-Answering-the-big-question-should-you-learn-SwiftUI-UIKit-or-both.md')


export default function Blog() {
    // this.componentDidMount = () => {
    //     const readmePath = require("./readme.md")
      
    //     fetch(readmePath)
    //       .then(response => {
    //         return response.text()
    //       })
    //       .then(text => {
    //         this.setState({
    //           markdown: ReactMarkdown(text)
    //         })
    //       })
    //   }
    return (
        <React.Fragment>
            <ReactMarkdown source={source} />
        </React.Fragment>
    )
}
