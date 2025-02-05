import { Instructors } from '@/components/about/instructors'
import { Welcome } from '@/components/about/welcome'
import { PageHeader } from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import React from 'react'

export const metadata = {
    title: 'About Us',
    description: "Learn more about Eligible School, our mission and vision.",
}

const Page = () => {
  return (
    <>
        <PageHeader title="About Us" />
        <Spacer/>
        <Welcome/>
        <Spacer/>
        <Instructors/>
        <Spacer/>
    </>
  )
}

export default Page