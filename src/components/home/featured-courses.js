import React from 'react'
import { Courses } from '../courses/courses'

export const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
        <Courses featured={true}/>
    </div>
  )
}
