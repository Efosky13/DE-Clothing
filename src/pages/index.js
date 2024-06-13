import products from '@/data/product';
import ProductList from '../components/ProductList';
import {FaApple, FaGoogle, FaShirt} from "react-icons/fa6"
import { clothingProducts } from '@/data/product';
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import { GiSleevelessJacket, GiHoodie, GiRolledCloth, GiShorts, GiDress } from "react-icons/gi";

const cP = clothingProducts.filter(cloth => cloth.name)

export default function Home() {
  return (
    <div className='h-full w-full bg-cover bg-center bg-decloth mix-blend-color-burn'>
      <Header />
      <div className=' mx-5 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-2 lg:grid-rows-4 sm:grid-rows-1 mt-3'>
        <div className='lg:col-span-1 lg:col-start-1 bg-white group-hover:text-yellow-500 row-span-2 px-4 py-4 gap-y-28 rounded-md border'>
          <div className=' block items-center'>
        <button className=' w-full rounded-lg p-4 bg-yellow-500 hover:bg-yellow-600'>SignIn</button>

        <div className=' text-center my-6 w-full'>Or</div>

        <button className=' w-full my-6 p-4 bg-yellow-600 rounded-lg hover:bg-yellow-500'>Register</button>

        <div className=' w-full my-6 text-center border-b border-black'>SignIn Options</div>
        {/* Sign In Icons */}
        <div className='sm:mx-[150px] text-center object-center flex'>
          <FaGoogle className='border rounded-full lg:p-2 items-center sm:text-2xl lg:text-4xl' />
          <FaApple className='' />
        </div>
          </div>
        </div>
        <div className='lg:col-span-2 sm:col-start-1 lg:row-span-2 lg:col-start-2 lg:row-start-1 border rounded-md h-72'>
          <Carousel />
        </div>
        <div className='lg:col-span-1 lg:row-span-1 lg:col-start-4 border lg:row-start-1'>

        </div>

        <div>

        </div>
      </div>
     
    </div>
  );
}

