// components/ImageCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';



import img1 from "../assets/images/Ankit's post Linkedin.jpeg";
import img2 from "../assets/images/Business Strategy Club's 2025.jpeg";
import img3 from "../assets/images/FullSizeRender.webp";
import img4 from "../assets/images/group.JPG";
import img5 from "../assets/images/IMG_0536.webp";
import img6 from "../assets/images/IMG_0576.webp";
import img7 from "../assets/images/IMG_0753.webp";
import img8 from "../assets/images/IMG_1447.webp";
import img9 from "../assets/images/IMG_2715.JPG";
import img10 from "../assets/images/IMG_3410.webp";
import img11 from "../assets/images/IMG_3665.webp";
import img12 from "../assets/images/IMG_3705.webp";
import img13 from "../assets/images/slwtt4mg668m58kk2uxz.webp";
import img14 from "../assets/images/IMG_4302.webp";
import img15 from "../assets/images/IMG_4355.webp";
import img16 from "../assets/images/IMG_4484 2.webp";
import img17 from "../assets/images/IMG_5170.webp";
import img18 from "../assets/images/IMG_5721.webp";
import img19 from "../assets/images/IMG_8013.webp";
import img20 from "../assets/images/IMG_8698.webp";
import img21 from "../assets/images/IMG_8727.webp";
import img22 from "../assets/images/IMG_8834.webp";
import img23 from "../assets/images/industry.jpeg";
import img24 from "../assets/images/lxvczgxig1qc00umut7t.webp";


const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24,
];

const ImageCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={2}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full px-4"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded shadow-md w-full h-80 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
