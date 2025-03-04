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
        title: '#StorieDeImpactoHipper',
        description:
          'Durante uma das pregações ou ministrações da Hipper Conference do dia de hoje, anote uma frase ou um trecho que te impactou profundamente ou te inspirou de alguma forma. Com essa frase ou trecho impactante, publique nos seus stories do instagram, marcando a <strong>@hipperconference<strong>',
        completed: false,
        emoji: '☄️',
        weight: 2,
      },
      {
        id: '02',
        title: '#ElogioProfeticoHipper',
        description:
          'Escolha DUAS pessoas diferentes que você não conhece na Hipper Conference. Aborde cada uma delas individualmente e, com sinceridade e sensibilidade, faça um elogio "profético".  Isso significa:  além de elogiar algo visível (a roupa, o sorriso, o estilo), tente perceber algo além do exterior e faça um elogio que abençoe a identidade e o potencial da pessoa',
        completed: false,
        emoji: '🫵',
        weight: 3,
      },
      {
        id: '03',
        title: '#TheBigWaveWhatsHipper',
        description:
          'Prepare seu WhatsApp para ser uma <strong class="text-hipper-aqua">Grande onda do amor de Jesus!</strong>  Seu desafio é enviar mensagens inspiradoras e personalizadas para <strong>DUAS pessoas</strong> de sua lista que <strong>não estarão na Hipper</strong> e precisam do amor de Cristo.  Para maior impacto, escolha contatos menos íntimos. <strong>Ore ao Espírito Santo por direção e palavras</strong>, e espalhe amor dEle! <strong>(✨BÔNUS: +1 ponto por pessoa alcançada através da sua mensagem)</strong>',
        completed: false,
        emoji: '🌊',
        weight: 4,
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
          'Ore Antes e Depois: A oração é a chave para este desafio! Ore antes de escolher as pessoas, durante a escrita das mensagens e após enviá-las, para que o Espírito Santo guie suas palavras e toque os corações.',
        emoji: '🕊️',
      },
      {
        id: '3',
        description:
          'Seja sempre respeitoso e gentil em suas mensagens. O objetivo é abençoar e transmitir amor!.',
        emoji: '🙏',
      },
      {
        id: '4',
        description:
          'Esteja aberto a ouvir: Após compartilhar, mostre-se disposto a conversar mais sobre isso, caso eles demonstrem curiosidade ou façam perguntas. Respeite a resposta deles, seja qual for',
        emoji: '👐',
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
      className="min-h-screen bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef] px-4 py-6 md:p-6 flex items-center justify-center overflow-hidden w-full"
      ref={topRef}
    >
      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg p-4 md:p-8 space-y-6 md:space-y-8 animate-fadeIn hover:shadow-xl transition-shadow duration-300">
        <div className="text-center space-y-2">
          <div
            onClick={() => setNextStep(false)}
            className="cursor-pointer inline-flex hover:bg-gray-100 p-2 rounded-full transition-colors absolute left-2 top-8"
          >
            <ArrowLeft width={20} height={20} color="#1c1594" />
          </div>
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] text-white text-sm rounded-full font-mono animate-pulse">
            🌊 The Big Wave
          </span>
          <img
            src={LogoHipperChallenger}
            alt="logo-hipper-challengers"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        <div className="space-y-4 md:space-y-6">
          <h2 className="flex items-center gap-2 font-medium text-xl text-hipper-blue">
            <Sparkles className="h-6 w-6" /> Desafios Dia 04
          </h2>
          <div className="space-y-4 mx-0 md:mx-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="group relative rounded-xl bg-gradient-to-r bg-white transition-all duration-300 hover:scale-[1.01] hover:shadow-md p-3 md:p-4"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1c1594] to-[#cd2cc1] font-mono text-sm text-white flex-shrink-0">
                      {challenge.emoji}
                    </div>
                    {challenge.weight && (
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#f2ff22] to-[#41eb68] text-[#1c1594] text-xs font-bold rounded-full sm:ml-1">
                        <Award className="w-3 h-3 text-[#1c1594]" />
                        <span>{challenge.weight}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-hipper-blue text-lg">
                      {challenge.title}
                    </h3>
                    {/* biome-ignore lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation> */}
                    <p
                      className="text-gray-600 text-sm break-words"
                      dangerouslySetInnerHTML={{
                        __html: challenge.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl font-medium text-[#1c1594] flex items-center gap-2">
            <Waves className="w-6 h-6" /> Regras
          </h2>
          <div className="bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-4 md:p-6">
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
