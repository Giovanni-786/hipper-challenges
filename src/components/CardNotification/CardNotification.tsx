import { MailWarning, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const notifications = [
  {
    title: 'É necessário completar o desafio apenas no dia do evento',
    description: '1 hour ago',
  },
  {
    title:
      'Assim que o desafio for completado é necessário mostrar ao supervisor que esta posicionado em alguns dos QR codes',
    description: '1 hour ago',
  },
  {
    title: 'Se divirta e espalhe o amor de Cristo! ❤️',
    description: '2 hours ago',
  },
]

interface ICardNotification {
  nextStep: boolean
  setNextStep: (arg0: boolean) => void
}
function CardNotification({ setNextStep }: ICardNotification) {
  return (
    <Card className="m-2.5 max-w-[450px] border-2 border-hipper-pink">
      <CardHeader>
        <CardTitle>
          <h2>Seja bem vindo Hipper! 🌊</h2>
        </CardTitle>
        <CardDescription className="mt-2">
          Está preparado para o desafio? Clique em aceitar e vamos comecar.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <MailWarning />
          <div className="flex-1 space-y-1">
            <p className="font-medium text-sm leading-none">
              Regras do Desafio Hipper 2025
            </p>
          </div>
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => setNextStep(true)}>
          <Check /> Eu aceito
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardNotification
