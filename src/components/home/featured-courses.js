import React from 'react'
import { Courses } from '../courses/courses'
import SectionHeader from '../common/section-header'

export const FeaturedCourses = () => {
  return (
    <div className="content-section bg">
        <SectionHeader title="Featured Courses"/>
        <Courses featured={true}/>
    </div>
  )
}
