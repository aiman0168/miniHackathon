import Image from 'next/image';
export default function CarDetails3(){

    return(
        <div className='flex items-center flex-col ml-32 mr-32'>
            <h1 className='underline text-black-500 text-4xl font-bold'>Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <Image src="/car3.jpg" alt="Honda City" width={400} height={400}></Image>
            <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae aliquam doloribus animi corrupti aliquid dolores eius, eveniet rerum ad! Iure labore sequi reprehenderit. Quam, sunt! Aspernatur id iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae aliquam doloribus animi corrupti aliquid dolores eius, eveniet rerum ad! Iure labore sequi reprehenderit. Quam, sunt! Aspernatur id iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae aliquam doloribus animi corrupti aliquid dolores eius, eveniet rerum ad! Iure labore sequi reprehenderit. Quam, sunt! Aspernatur id iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae aliquam doloribus animi corrupti aliquid dolores eius, eveniet rerum ad! Iure labore sequi reprehenderit. Quam, sunt! Aspernatur id iusto.</p>
            <p className='text-2xl text-green-500 mt-12'>PKR 5,800,000</p>
            <button className=" py-3 px-7 rounded-lg bg-blue-900 text-white mt-12 mb-12">Make Payment</button>
        </div>
    )
};