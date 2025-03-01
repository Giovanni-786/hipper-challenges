import { Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import LogoHipperChallenger from '../../assets/challenges.png'

function CardNotificationPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8ee3ef] via-white to-[#8ee3ef] p-6 flex items-center justify-center overflow-hidden relative">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3YXZlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTI1LDUwIEE1MCw1MCAwIDAsOSA3NSw1MCBBNTAsNTAgMCAwLDkgMjUsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDQsIDIyNywgMjM5LCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjd2F2ZSkiLz48L3N2Zz4=')] animate-[wave_15s_linear_infinite] opacity-50" />
      </div>

      <Card
        className={cn(
          'w-full max-w-[450px] backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn border-2',
          'border-white'
        )}
      >
        <CardHeader>
          <div className="text-center space-y-2 mb-4">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1c1594] to-[#cd2cc1] text-white text-sm rounded-full font-mono animate-pulse">
              🌊 The Big Wave
            </span>
          </div>
          <CardTitle className="text-center">
            <img
              src={LogoHipperChallenger}
              alt="logo-hipper-challengers"
              className="mx-auto max-w-full h-auto"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8">
          <div className="bg-gradient-to-r from-white to-[#8ee3ef]/10 rounded-xl p-6 flex items-center justify-center gap-3 mx-auto max-w-[90%]">
            <Clock
              className="text-[#1c1594] animate-pulse "
              width={40}
              height={40}
            />
            <p className="text-sm font-medium text-[#1c1594]">
              Os desafios serão liberados às 17:00
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardNotificationPreview
