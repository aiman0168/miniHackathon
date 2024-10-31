import Hero from './components/Hero-section';
import Featuring from './components/Featuring';
import Link from 'next/link';
export default function Home() {
    return(
        <div>
        <Hero/>
        <br/>
        <Featuring/>
        <br/>
        <div className='flex justify-center'>
        <Link href="./checkout"><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition mb-4">Click Here to Checkout</button></Link>
        </div>
        </div>
    )
};