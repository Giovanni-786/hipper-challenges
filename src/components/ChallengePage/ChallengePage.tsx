import { useState } from 'react'
import { useReward } from 'react-rewards'
import { Check, Waves, Sparkles } from 'lucide-react'

interface Challenge {
  id: string
  title: string
  description: string
  completed: boolean
  emoji: string
}

interface Rule {
  id: string
  description: string
  emoji: string
}

const initialChallenges: Challenge[] = [
  {
    id: '01',
    title: 'Challenge 01',
    description: "Share God's love with someone new today",
    completed: false,
    emoji: '💖',
  },
  {
    id: '02',
    title: 'Challenge 02',
    description: 'Invite a friend to join our community',
    completed: false,
    emoji: '🤝',
  },
  {
    id: '03',
    title: 'Challenge 03',
    description: 'Share your faith journey with others',
    completed: false,
    emoji: '🌟',
  },
]

const rules: Rule[] = [
  {
    id: '1',
    description: 'Complete all challenges within the given timeframe',
    emoji: '⏰',
  },
  {
    id: '2',
    description: 'Use only the specified methods for sharing',
    emoji: '📱',
  },
  {
    id: '3',
    description: 'Be respectful and compassionate in all interactions',
    emoji: '🙏',
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
    <div className="min-h-screen bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef] p-6 flex items-center justify-center overflow-hidden relative">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTI1LDUwIEE1MCw1MCAwIDAsOSA3NSw1MCBBNTAsNTAgMCAwLDkgMjUsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDQsIDIyNywgMjM5LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjd2F2ZSkiLz48L3N2Zz4=')] animate-[wave_15s_linear_infinite] opacity-50" />
      </div>

      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg p-8 space-y-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] text-white text-sm rounded-full font-mono animate-pulse">
            🌊 The Big Wave
          </span>
          <h1 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] bg-clip-text text-transparent">
            Challenge Board
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-[#1c1594] flex items-center gap-2">
            <Sparkles className="w-6 h-6" /> Your Challenges
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group relative bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1c1594] to-[#cd2cc1] text-white flex items-center justify-center font-mono text-sm">
                      {challenge.emoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-[#1c1594] mb-1">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggleChallenge(challenge.id)}
                      className={`w-8 h-8 rounded-md border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${challenge.completed ? 'border-[#41eb68] bg-[#41eb68]' : 'border-[#1c1594] hover:border-[#cd2cc1]'}`}
                    >
                      {challenge.completed && (
                        <Check className="w-5 h-5 text-white animate-bounce" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-[#1c1594] flex items-center gap-2">
            <Waves className="w-6 h-6" /> Rules
          </h2>
          <div className="bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-6">
            <ul className="space-y-4">
              {rules.map((rule) => (
                <li key={rule.id} className="flex items-start space-x-3 group">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xl animate-bounce">
                    {rule.emoji}
                  </span>
                  <span className="text-gray-600 group-hover:text-[#1c1594] transition-colors text-sm">
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
