import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import Page1 from '../pages/Fullpages/page-1.js'
import Page2 from '../pages/Fullpages/page-2.js'
import Page3 from '../pages/Fullpages/page-3.js'
import Page4 from '../pages/Fullpages/page-4.js'

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={''}
        scrollingSpeed={800} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <Page1 />
                    <Page2 />
                    <Page3 />
                    <Page4 />
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default function About() {
    return (
        <Fullpage />
    )
}