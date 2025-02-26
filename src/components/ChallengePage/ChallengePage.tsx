import { useEffect, useRef, useState } from 'react'
import { useReward } from 'react-rewards'
import { Waves, Sparkles } from 'lucide-react'
import LogoHipperChallenger from '../../assets/challenges.png'

interface Challenges {
  id: string
  title: string
  description: string
  completed: boolean
  emoji: string
}
interface ChallengeAndRules {
  challenges: Challenges[]
  rules: Rule[]
}
interface Rule {
  id: string
  description: string
  emoji: string
}

const initialChallenges: ChallengeAndRules[] = [
  {
    challenges: [
      {
        id: '01',
        title: 'Desafio 01',
        description: 'Ligue para 1 familiar e fale do amor de Jesus',
        completed: false,
        emoji: '💖',
      },
      {
        id: '02',
        title: 'Desafio 02',
        description: 'Poste uma foto com sua galera marcando a hipper',
        completed: false,
        emoji: '📸',
      },
      {
        id: '03',
        title: 'Desafio 03',
        description: 'Ligue para um amigo seu e apresente Jesus',
        completed: false,
        emoji: '🌟',
      },
    ],
    rules: [
      {
        id: '1',
        description: 'Complete todos os desafios no dia do evento',
        emoji: '⏰',
      },
      {
        id: '2',
        description:
          'Assim que o desafio for finalizado, valide com um dos supervisores que estão posicionados um dos QR codes',
        emoji: '📱',
      },
      {
        id: '3',
        description: 'Seja respeitoso e compassivo em todas as interações',
        emoji: '🙏',
      },
    ],
  },
]

export function ChallengePage() {
  const [challenges] = useState<Challenges[]>(
    initialChallenges.flatMap((group) => group.challenges)
  )
  const topRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef] p-6 flex items-center justify-center overflow-hidden relative"
      ref={topRef}
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTI1LDUwIEE1MCw1MCAwIDAsOSA3NSw1MCBBNTAsNTAgMCAwLDkgMjUsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDQsIDIyNywgMjM5LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjd2F2ZSkiLz48L3N2Zz4=')] animate-[wave_15s_linear_infinite] opacity-50" />
      </div>

      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg p-8 space-y-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] text-white text-sm rounded-full font-mono animate-pulse">
            🌊 The Big Wave
          </span>
          <img src={LogoHipperChallenger} alt="logo-hipper-challengers" />
        </div>

        <div className="space-y-6">
          <h2 className="flex items-center gap-2 font-medium text-xl text-hipper-blue">
            <Sparkles className="h-6 w-6" /> Desafios dia 01
          </h2>
          <div className="space-y-4 m-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group relative mr-6 rounded-xl bg-gradient-to-r bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1c1594] to-[#cd2cc1] font-mono text-sm text-white">
                      {challenge.emoji}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-bold text-hipper-blue text-lg">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium text-[#1c1594] flex items-center gap-2">
            <Waves className="w-6 h-6" /> Regras
          </h2>
          <div className="bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-6">
            <ul className="space-y-4">
              {initialChallenges[0].rules.map((rule) => (
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
