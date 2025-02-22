import { useState } from 'react'
import CardNotification from '../CardNotification/CardNotification'
import { ChallengePage } from '../ChallengePage/ChallengePage'

function Welcome() {
  const [nextStep, setNextStep] = useState(false)
  console.log(nextStep)
  return (
    <article className="flex min-h-screen w-full justify-center bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef]">
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
