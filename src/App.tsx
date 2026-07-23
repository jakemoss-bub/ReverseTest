import { Landing } from './components/Landing'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Landing />
      <Footer />
    </div>
  )
}
