import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'
import { AppLayout } from '../../components/AppLayout'

const NewPost = (props) => {
    return (
        <div>New Post page</div>
    )
}

export default NewPost

NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>
        {page}
    </AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {}
    }
});