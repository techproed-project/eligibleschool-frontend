import { PageHeader } from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import { LoginForm } from '@/components/login/login-form'
import React from 'react'

const Page = () => {
  return (
    <>
        <PageHeader title="Login" />
        <Spacer/>
        <LoginForm/>
        <Spacer/>
    </>
  )
}

export default Page