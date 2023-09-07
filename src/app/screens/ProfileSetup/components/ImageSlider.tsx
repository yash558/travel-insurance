import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = () => {
  const data = [
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 1,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 2,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 3,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 4,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 5,
    },
  ];

  return (
    <div className="mobile:hidden">
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          autoplay={{ pauseOnMouseEnter: true }}
          breakpoints={{
            228: {
              slidesPerView: 1,
            },
            348: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {data?.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="ms-4">
                <Image
                  src={item.img}
                  className="w-[650px] h-[400px] object-cover rounded-tl-[200px] rounded-3xl mobile:w-[70px] mobile:h-[50px]"
                  width={600}
                  height={600}
                  alt="Logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
