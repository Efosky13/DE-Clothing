import products from '@/data/product';
import ProductList from '../components/ProductList';
import {FaShirt} from "react-icons/fa6"
import { clothingProducts } from '@/data/product';
import Carousel from '@/components/Carousel';
import { GiSleevelessJacket, GiHoodie, GiRolledCloth, GiShorts, GiDress } from "react-icons/gi";

const cP = clothingProducts.filter(cloth => cloth.name)

export default function Home() {
  return (
    <div className='absolute h-full w-full bg-cover bg-center bg-decloth mix-blend-color-burn'>
      <div className=' grid grid-cols-4 gap-4 grid-rows-4 mt-3'>
        <div className=' col-span-1 col-start-1 bg-white group-hover:text-yellow-500 row-span-2 px-4 py-4 gap-y-28 rounded-md border'>
         {cP.map(cp => {
          return (
            <div key={cp.id} className=' hover:text-yellow-500 flex items-center'>
              <span>{cp.icons}</span>
              <h2 className='text-lg ml-1'>{cp.name}</h2>
            </div>
          )
         })}
        </div>
        <div className='col-span-2 row-span-2 col-start-2 row-start-1 border rounded-md h-72'>
          <Carousel />
        </div>
        <div className='col-span-1 row-span-1 col-start-4 border row-start-1'>

        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

