import { Header } from '~/components/header'
import { Toolbar } from '~/components/toolbar'

export function TistorySkinbook () {
  return (
    <div className="relative flex flex-col w-full h-full">
      <Header />
      <div className="w-full h-full flex">
        <Toolbar />
        <div className="w-full h-full"></div>
      </div>
    </div>
  )
}
