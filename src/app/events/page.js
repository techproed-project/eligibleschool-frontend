import { PageHeader } from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import { Events } from '@/components/events/events'
import React from 'react'

const Page = () => {
  return (
    <>
        <PageHeader title="Events" />
        <Spacer/>
        <Events/>
        <Spacer/>

    </>
  )
}

export default Page