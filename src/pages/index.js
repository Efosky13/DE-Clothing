import products from '@/product';
import ProductList from '../components/ProductList';
import {FaShirt} from "react-icons/fa6"
import Carousel from '@/components/Carousel';
import { GiSleevelessJacket, GiHoodie, GiRolledCloth } from "react-icons/gi";

export default function Home() {
  return (
    <div className='absolute h-full w-full bg-cover bg-center bg-decloth mix-blend-color-burn'>
      <div className=' grid grid-cols-4 gap-4 grid-rows-4 mt-3'>
        <div className=' col-span-1 col-start-1 bg-white group-hover:text-yellow-500 row-span-2 px-4 py-4 gap-y-28 rounded-md border'>
          <div className=' flex items-center hover:text-yellow-500'>
            <span><FaShirt />
</span><span className=' ml-1'>T-Shirts</span>
          </div>
          <div className=' flex items-center hover:text-yellow-500'>
            <span><GiSleevelessJacket /></span>
            <span className=' ml-1'>Sleeveless</span>
          </div>
          <div className=' flex items-center hover:text-yellow-500'>
            <span><GiHoodie /></span>
            <span>Hoodies</span>
          </div>
          <div className=' hover:text-yellow-500 flex items-center'>
            <span><GiRolledCloth /></span>
            <span className=' ml-1'>Native</span>
          </div>
          <div>
            Categories
          </div>
        </div>
        <div className=' col-span-2 row-span-2 col-start-2 row-start-1 border'>
        <Carousel />
        </div>
        <div className=' col-span-1 row-span-1 col-start-4 border row-start-1'>

        </div>

        <div>

        </div>
      </div>
    </div>
  );
}
