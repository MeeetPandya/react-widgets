import Header from './components/ui/header';
import AnalogClock from './components/widgets/analogClock';
import Calendar from './components/widgets/cal';
import { GifPlayer } from './components/widgets/GifPlayer';
import Marquee from './components/widgets/Marquee';

function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-secondary font-sans flex p-4 flex-col gap-4 ">
        <Header />
        <Marquee />
        <div className='gap-2 grid grid-cols-5 mx-auto'>
        <Calendar />
        <GifPlayer />
        <AnalogClock />
        </div>
      </div>
    </>
  )
}

export default App
