import Calander from './components/calendar'
import Marquee from './components/Marquee'
function App() {

  return (
    <>
      <div className="min-h-screen min-w-max text-black bg-amber-500 p-4">
      <div className='grid gap-4' 
      style={{
        gridTemplateAreas: `
        "header header header header"
        "github calander weather weather"
        "discord calander cat todo"
        "discord clock cat todo"`,
        gridTemplateColumns: '1fr 2fr 1fr 1fr',
        gridTemplateRows: 'auto 1fr 1fr 1fr',
      }}
      >
        <div style={{ gridArea: "marquee" }}><Marquee /></div>
        <div style={{ gridArea: "github" }}>GithubWidget</div>
        <div style={{ gridArea: "discord" }}>DiscordWidget</div>
        <div style={{ gridArea: "calendar" }}><Calander /></div>
        <div style={{ gridArea: "clock" }}>ClockWidget</div>
        <div style={{ gridArea: "weather" }}>WeatherWidget</div>
        <div style={{ gridArea: "todo" }}>TodoWidget</div>
        <div style={{ gridArea: "cat" }}>CatWidget</div>
      </div>
      </div>
    </>
  )
}

export default App
