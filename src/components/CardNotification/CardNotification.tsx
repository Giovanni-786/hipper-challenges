import { CircleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import LogoHipperChallenger from '../../assets/challenges.png'
const notifications = [
  {
    title: 'Para cada dia da nossa conferência vamos ter 3 desafios',
    emoji: '📅',
  },
  {
    title:
      'Assim que o desafio for completado é necessário mostrar ao supervisor que esta posicionado em alguns dos QR codes para que ele possa validar',
    emoji: '🧐',
  },
  {
    title:
      'Cada desafio terá um peso de 0 a 5. Acumule pontos a cada desafio concluído!',
    emoji: '🏆',
  },
  {
    title:
      'Sorteio especial: ao final da conferência, três ganhadores levarão prêmios incríveis!',
    emoji: '🎉',
  },
  {
    title: 'Se divirta e espalhe o amor de Cristo! ❤️',
    emoji: '🙏',
  },
]
interface ICardNotification {
  setNextStep: (arg0: boolean) => void
}
function CardNotification({ setNextStep }: ICardNotification) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef] p-6 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTI1LDUwIEE1MCw1MCAwIDAsOSA3NSw1MCBBNTAsNTAgMCAwLDkgMjUsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDQsIDIyNywgMjM5LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjd2F2ZSkiLz48L3N2Zz4=')] animate-[wave_15s_linear_infinite] opacity-50" />
      </div>
      <Card
        className={cn(
          'w-full max-w-[450px] backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn border-2',
          'border-white '
        )}
      >
        <CardHeader>
          <div className="text-center space-y-2 mb-4">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] text-white text-sm rounded-full font-mono animate-pulse">
              🌊 The Big Wave
            </span>
          </div>
          <CardTitle className="text-center">
            <img src={LogoHipperChallenger} alt="logo-hipper-challengers" />
          </CardTitle>
          <CardDescription className="mt-4 text-center text-base text-gray-600">
            Está preparado para o desafio? Clique em começar e vamos iniciar 🚀
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="group relative bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1c1594] to-[#cd2cc1] text-white flex items-center justify-center">
                  <CircleAlert className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#1c1594] text-sm ">
                  Informacoes importantes sobre o Hipper Challengers 2025
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl animate-bounce">
                    {notification.emoji}
                  </span>
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-[#1c1594] transition-colors">
                      {notification.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] hover:opacity-90 transition-opacity text-white font-semibold py-6 text-lg"
            onClick={() => setNextStep(true)}
          >
            Começar 🔥
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
export default CardNotification
