import Container from "@/app/container/Container";
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
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 6,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 7,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 8,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 9,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 10,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 11,
    },
    {
      img: "/assets/bg.png",
      price: "50",
      relationId: 12,
    },
  ];

  return (
    <div className="mt-10 mobile:hidden">
      <Container>
        <div className="w-[600px]">
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
                <div className=" mx-4">
                  <div className="">
                  <Image
            src={item.img}
         
            className="w-[600px] rounded-tl-[200px] rounded-3xl  h-[450px] mobile:w-[70px] mobile:h-[50px]"
            width={200}
            height={200}
            alt="Logo"
          />
                 
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ImageSlider;
