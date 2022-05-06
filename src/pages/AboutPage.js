import React from 'react'
import {Link} from "react-router-dom"
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card className="about">
      <h1>About this project</h1>
      <p>This is a react app to leave feedback for a product</p>
      <p><Link to="/">Back to Home</Link></p>
    </Card>
  )
}

export default AboutPage
