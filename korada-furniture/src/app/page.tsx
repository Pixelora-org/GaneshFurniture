import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Features from '@/components/Features'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Features />
    </div>
  )
}