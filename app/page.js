import Image from 'next/image'
import Header from '../components/Header.jsx'
import TopCards from '@/components/TopCards.jsx'
import BarChart from '@/components/BarChart.jsx'
import RecentOrders from '@/components/RecentOrders.jsx'
export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
    <Header />
    <TopCards />
    <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
      <BarChart />
      <RecentOrders />
    </div>
    </main>
  )
}