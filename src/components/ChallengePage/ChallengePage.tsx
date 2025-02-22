import { Check } from 'lucide-react'
import { useState } from 'react'
import { useReward } from 'react-rewards'

interface Challenge {
  id: string
  title: string
  description: string
  completed: boolean
}

interface Rule {
  id: string
  description: string
}

const initialChallenges: Challenge[] = [
  {
    id: '01',
    title: 'Challenge 01',
    description: 'Build a responsive landing page',
    completed: false,
  },
  {
    id: '02',
    title: 'Challenge 02',
    description: 'Create an interactive form',
    completed: false,
  },
  {
    id: '03',
    title: 'Challenge 03',
    description: 'Implement a dynamic dashboard',
    completed: false,
  },
]

const rules: Rule[] = [
  {
    id: '1',
    description: 'Complete all challenges within the given timeframe',
  },
  {
    id: '2',
    description: 'Use only the specified technologies',
  },
  {
    id: '3',
    description: 'Follow the coding standards and best practices',
  },
]

export function ChallengePage() {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges)
  const { reward } = useReward('rewardId', 'confetti')

  const toggleChallenge = (challengeId: string) => {
    reward()
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === challengeId
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg p-8 space-y-8 animate-fadeIn">
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-mono">
            Welcome
          </span>
          <h1 className="text-4xl font-semibold tracking-tight">
            Hipper Challenge
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium">Your Challenges</h2>
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group relative bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center font-mono text-sm">
                      {challenge.id}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button
                      onClick={() => toggleChallenge(challenge.id)}
                      className={`flex h-6 w-6 items-center justify-center rounded-md border-2 transition-colors ${challenge.completed ? 'border-green-500 bg-green-500' : 'border-gray-300 hover:border-gray-400'}`}
                    >
                      <span id="rewardId" />
                      {challenge.completed && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium">Rules</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3">
              {rules.map((rule) => (
                <li key={rule.id} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                  <span className="text-gray-600 text-sm">
                    {rule.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
