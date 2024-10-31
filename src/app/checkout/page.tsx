import Link from 'next/link';
export default function checkout() {
    return(
        <div>
            <h1 className="text-4xl font-bold mt-12 flex border-b justify-center">Enter your details</h1>
            <div className="mt-40">
            <form className="mt-10 flex gap-5 items-center flex-col">
                <input type="name" className="p-2 w-2/5 border border-gray-300"
                 placeholder="Enter your Name" required/>

                <input type="email" className="p-2 w-2/5 border border-gray-300"
                 placeholder="Enter your Email" required />

                <input type="number" className="p-2 w-2/5 border border-gray-300"
                 placeholder="Card Number" required/>

                <input type="address" className="p-2 w-2/5 border border-gray-300" 
                placeholder="Address" required/>

                <Link href="./thankyou"><button className=" py-3 px-7 rounded-lg bg-blue-900 text-white mb-12">
                    Place your order</button></Link>
            </form>
            </div>
        </div>
    )
}