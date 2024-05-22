import { PartnerCard } from "../PartnerCard/PartnerCard"
import './TeamSlider.css'

/* import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from "swiper/modules"

import { RxArrowTopRight } from "react-icons/rx" */

export const TeamSlider = () => {
  return (
/*     <div className="flex items-center justify-center flex-col h-screen bg-[$6c34af] z-10 ">
        <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700:{
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[60%] lg:max-w-[50%]"> */
        <div className="">
          <ul className="grid grid-flow-col overflow-x-auto scroll-smooth carrousel-parther ">
            <li>
            <PartnerCard />
            </li>
{/*             <li>
            <PartherCard />
            </li>
            <li>
            <PartherCard />
            </li>
            <li>
            <PartherCard />
            </li> */}
          </ul>
        </div>
/*          </Swiper> 

    </div> */
  )
}
