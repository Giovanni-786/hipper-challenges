import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { motion, AnimatePresence } from 'framer-motion'
interface Challenge {
  id: number
  text: string
  completed: boolean
}
const ChallengeCard = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      text: 'Poste uma foto com sua galera marcando a hipper',
      completed: false,
    },
    { id: 2, text: 'Configure your preferences', completed: false },
    { id: 3, text: 'Start your journey', completed: false },
  ])
  const [progress, setProgress] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const completedCount = challenges.filter((c) => c.completed).length
    const newProgress = (completedCount / challenges.length) * 100
    setProgress(newProgress)
    if (newProgress === 100) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [challenges])
  const toggleChallenge = (id: number) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    )
  }
  return (
    <article className="m-2.5">
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            className="-translate-x-1/2 fixed top-1/4 left-1/2 transform text-6xl"
            style={{ zIndex: 50, top: 15 }}
          >
            🎉
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
      >
        <div className="p-6">
          <h2 className="mb-2 font-semibold text-4xl text-gray-900">
            LOGO HIPPER 🔥
          </h2>

          <div>
            <p className="text-2xl">Desafio 01</p>
            <p className="text-sm">Seus Desafios de hoje são: 🎯</p>
          </div>
          <div className="mb-6 space-y-6">
            {challenges.map((challenge) => (
              <motion.div
                key={challenge.id}
                className="flex items-center space-x-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Checkbox
                  id={`challenge-${challenge.id}`}
                  checked={challenge.completed}
                  onCheckedChange={() => toggleChallenge(challenge.id)}
                  className="data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-900"
                />
                <label
                  htmlFor={`challenge-${challenge.id}`}
                  className={`flex-1 text-sm ${
                    challenge.completed
                      ? 'text-gray-400 line-through'
                      : 'text-gray-700'
                  } transition-colors duration-200`}
                >
                  {challenge.text}
                </label>
              </motion.div>
            ))}
            <div>
              <p>Regras do Desafio 📜</p>
              <p>- Use os stories/reels/tiktok para postar esse conteúdo</p>
              <p>- Precisa estar no espaco da Hipper</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progresso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </motion.div>
    </article>
  )
}
export default ChallengeCard
