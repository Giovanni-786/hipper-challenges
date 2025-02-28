import { useEffect, useRef, useState } from 'react'

import { Waves, Sparkles, ArrowLeft, Award } from 'lucide-react'
import LogoHipperChallenger from '../../assets/challenges.png'

interface ChallengePage {
  setNextStep: (arg0: boolean) => void
}

interface Challenges {
  id: string
  title: string
  description: string
  completed: boolean
  emoji: string
  weight: number
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
        description:
          'Poste uma foto com sua galera marcando a @hipperconference',
        completed: false,
        emoji: '📸',
        weight: 2,
      },
      {
        id: '02',
        title: 'Desafio 02',
        description:
          'Ligue ou envie um áudio para um familiar e compartilhe como a esperança em Jesus te ajuda a enfrentar os desafios da vida. Pergunte sobre os desafios que ele(a) está enfrentando e ofereça uma palavra de encorajamento e oração (se a pessoa se sentir confortável',
        completed: false,
        emoji: '❤️',
        weight: 4,
      },
      {
        id: '03',
        title: 'Desafio 03',
        description:
          'Quebre o Gelo! Dê um Presente da Hipper para alguém que você não conhece. O presente pode ser qualquer coisa que esteja vendendo na Hipper',
        completed: false,
        emoji: '🎁',
        weight: 3,
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
          'Ore antes de ligar/enviar o áudio e pergunte para o Espírito como você deve compartilhar essa mensagem.',
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

export function ChallengePage({ setNextStep }: ChallengePage) {
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
      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg p-8 space-y-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2">
          <div onClick={() => setNextStep(false)}>
            <ArrowLeft width={20} height={20} color="#1c1594" />
          </div>
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
                    {challenge.weight && (
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#f2ff22] to-[#41eb68] text-[#1c1594] text-xs font-bold rounded-full mt-1.5">
                        <Award className="w-3 h-3 text-[#1c1594]" />
                        <span>{challenge.weight}</span>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-bold text-hipper-blue text-lg">
                      {challenge.title}
                    </h3>
                    {/* Challenge weight/points badge */}
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
