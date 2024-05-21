import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'

const TokenTopup = () => {
    return (
        <div>token topup page</div>
    )
}

export default TokenTopup

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {},
    }
});