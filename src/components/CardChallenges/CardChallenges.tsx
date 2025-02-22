import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

function CardChallenges() {
  return (
    <Card className="mt-5 mr-2.5 ml-2.5">
      <CardHeader>
        <CardTitle className="bg-mint-500 text-4xl">
          Desafio Dia 01 🔥
        </CardTitle>
        <CardDescription>Está preparado para o desafio?</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-xl">
            Desafio 1
          </label>
        </div>
        <div>
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-xl">
            Desafio 2
          </label>
        </div>
        <div>
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-xl">
            Desafio 3
          </label>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardChallenges
