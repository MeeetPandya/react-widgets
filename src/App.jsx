import Header from './components/ui/header';
import Calendar from './components/widgets/cal';
import Marquee from './components/widgets/Marquee';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex p-4 flex-col gap-4">
        <Header />
        <Marquee />
        <div className='gap-2 grid grid-cols-5 mx-auto'>
        <Calendar />
        </div>
      </div>
    </>
  )
}

export default App
