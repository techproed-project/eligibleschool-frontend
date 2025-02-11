import { PageHeader } from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import { DashboardNavigation } from '@/components/dashboard/home/dashboard-navigation'
import React from 'react'

const Page = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Spacer/>
      <DashboardNavigation/>
      <Spacer/>

    </>
  )
}

export default Page