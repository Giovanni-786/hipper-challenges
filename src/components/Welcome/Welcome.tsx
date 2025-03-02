import { useState } from 'react'
import { ChallengePage } from '../ChallengePage/ChallengePage'
// import CardNotification from '../CardNotification/CardNotification'
// import CardNotificationPreview from '../CardNotificationPreview/CardNotificationPreview'
import CardNotification from '../CardNotification/CardNotification'

function Welcome() {
  const [nextStep, setNextStep] = useState(false)
  return (
    <article className="flex min-h-screen w-full justify-center bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef]">
      <div className="mx-auto my-0 mt-4 text-5xl">
        {!nextStep ? (
          <CardNotification setNextStep={setNextStep} />
        ) : (
          <ChallengePage setNextStep={setNextStep} />
        )}
      </div>
    </article>
  )
}

export default Welcome
