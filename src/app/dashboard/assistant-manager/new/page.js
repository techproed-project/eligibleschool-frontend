import { PageHeader } from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import { AssistantCreateForm } from '@/components/dashboard/assistant/create-form'
import React from 'react'

const Page = () => {
  return (
    <>
        <PageHeader title="New Assistant" />
        <Spacer/>
        <AssistantCreateForm/>
        <Spacer/>
    </>
  )
}

export default Page