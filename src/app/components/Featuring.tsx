import Link from 'next/link';
import Image from 'next/image';
export default function FeaturedCars(){
     return(
            <div className='bg-gray-200 pb-12'>
                     <div className='flex justify-between font-sans mr-64 ml-64 mb-12'>
                         <h2 className='text-gray-600 font-bold text-lg mt-12'>Featured New Cars</h2>
                         <span className="text-blue-600 mt-12">View all new Cars</span>
                     </div>
                     <div className='flex font-sans mr-64 ml-64 mb-12 border-b border-gray-300'>
                     <span className='text-lg mr-12'>Popular</span>
                     <span className='text-lg  mr-12'>Upcoming</span>
                     <span className='text-lg  mr-12'>Newly Launched</span>
                     </div>
                 <div className="flex justify-evenly mr-64 ml-64 pb-4">
                     <div className="bg-white h-72 w-60 text-center">
                         <Link href="../CarDetails1"><Image src="/car1.jpg" alt="Suzuki Alto" width={250} height={80}/></Link>
                         <h3 className='text-base text-blue-900 font-bold'>Suzuki Alto</h3>
                         <div className='text-green-600 text-sm'>PKR 23.3-30.5 lacs</div>
                         <span className='text-gray-600 text-sm'>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             622 Reviews</span>
                     </div>
                     <div className="bg-white h-72 w-60 text-center">
                     <Link href="../CarDetails2"><Image src="/car2.jpg" alt="Toyota Corolla" width={250} height={80}/></Link>
                         <h3 className='text-base text-blue-900 font-bold'>Toyota Corolla</h3>
                         <div className='text-green-600 text-sm'>PKR 59.7-75.5 lacs</div>
                         <span className='text-gray-600 text-sm'>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             622 Reviews</span>
                         </div>
                    <div className="bg-white h-72 w-60 text-center">
                    <Link href="../CarDetails3"><Image src="/car3.jpg" alt="Honda City" width={250} height={80}/></Link>
                        <h3 className='text-base text-blue-900 font-bold'>Honda City</h3>
                        <div className='text-green-600 text-sm'>PKR 46.5-58.5 lacs</div>
                        <span className='text-gray-600 text-sm'>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                         622 Reviews</span>
                     </div>
                    <div className="bg-white h-72 w-60 text-center">
                    <Link href="../CarDetails4"><Image src="/car4.jpg" alt="Honda Civic" width={250} height={80}/></Link>
                       <h3 className='text-base text-blue-900 font-bold'>Honda Civic</h3>
                       <div className='text-green-600 text-sm'>PKR 86.6-99.0 lacs</div>
                       <span className='text-gray-600 text-sm'>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="fas fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                             <i className="far fa-star text-orange-500 text-xs"></i>
                         622 Reviews</span>
                     </div>
                  </div>
                  <p className='flex justify-center text-base text-blue-900'>Click on the images to see description</p>
             </div>
            )
};