export default function Hero(){
    return (
        <div className="h-96 mt-16">
            <div className="flex flex-col px-11 bg-white ">
            <h1 className="flex justify-center text-2xl text-gray-600 font-bold">Sell Your Car on PakWheels and Get the Best Price</h1>
            </div>
            <div className="flex justify-center items-center mt-8">
                
                <div className="w-96 h-64 border border-gray-300 border-t-0 border-r-0 p-4 m-0">
                    <h2 className="text-xl font-bold text-left ml-8 text-blue-950">Post your Ad on PakWheels</h2>
                    <ul className="mt-2 text-left ml-8 mt-6 text-grey-300 font-sans text-sm">
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>Post your Ad for Free in 3 Easy Steps</li>
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>Get Genuine offers from Verified Buyers</li>
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>Sell your car Fast at the Best Price</li>
                        <button className='bg-red-700 text-white px-12 py-2 rounded hover:bg-red-800 mt-4'>Post Your Ad</button>
                    </ul>
                </div>

                <div className="flex flex-col px-11 bg-white ">
               <div className="w-px h-20 flex justify-center bg-gray-300 mb-2"></div>
              <span className="text-gray-600 font-semibold mb-2">OR</span>
              <div className="w-px h-20 bg-gray-300 mb-2" ></div>
               </div>
                    
                <div className="w-96 h-64 border border-gray-300 border-t-0 border-l-0 p-4 m-0">
                    <h2 className="text-xl font-bold text-left ml-8 text-blue-950">Try PakWheels Sell It For Me</h2>
                    <ul className="mt-2 text-left ml-8 mt-6 text-grey-300 font-sans text-sm">
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>Dedicated Sales Expert to Sell your Car</li>
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>We Bargain for you and share the Best Offer</li>
                        <li><i className="fa-solid fa-check text-green-500 mr-2 text-lg"></i>We ensure Safe & Secure Transaction</li>
                        <button className='bg-blue-700 text-white px-12 py-2 rounded hover:bg-blue-800 mt-4'>Register Your Car</button>
                    </ul>
                </div>
            </div>
        </div>
    );
}