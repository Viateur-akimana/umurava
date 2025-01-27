import Accelerate from '@/components/layout/subcomponents/accelerate'
import Collaborators from '@/components/layout/subcomponents/collaborators'
import Connect from '@/components/layout/subcomponents/connect'
import IntegrationSteps from '@/components/layout/subcomponents/integrationSteps'
import Offerings from '@/components/layout/subcomponents/offerings'
import React from 'react'

const Education = () => {
  return (
    <div>
      <Accelerate />
      <Offerings />
      <Collaborators />
      <IntegrationSteps />
      <Connect />
    </div>
  )
}

export default Education