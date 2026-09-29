import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseSection from './components/CaseSection'
import TradeRoute from './components/TradeRoute'
import RealitySection from './components/RealitySection'
import WhySection from './components/WhySection'
import ImpactSection from './components/ImpactSection'
import ActionSection from './components/ActionSection'
import FinalCTA from './components/FinalCTA'
import Sources from './components/Sources'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <CaseSection />
        <TradeRoute />
        <RealitySection />
        <WhySection />
        <ImpactSection />
        <ActionSection />
        <FinalCTA />
        <Sources />
      </main>
    </>
  )
}
