import { useState } from 'react'
import CardNotification from '../CardNotification/CardNotification'
import { ChallengePage } from '../ChallengePage/ChallengePage'

function Welcome() {
  const [nextStep, setNextStep] = useState(false)
  console.log(nextStep)
  return (
    <article className="flex h-dvh w-full justify-center">
      <div className="mx-auto my-0 mt-15 text-5xl">
        {!nextStep ? (
          <CardNotification nextStep={nextStep} setNextStep={setNextStep} />
        ) : (
          <ChallengePage />
        )}
      </div>
    </article>
  )
}

export default Welcome
