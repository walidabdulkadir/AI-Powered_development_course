import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import styles from "./SlideShow.module.css";

function SlideShow({ title, movies }) {
  return (
    <div className="relative z-10 my-8 px-8 group/row hover:z-50">
      {/* Title */}
      <h2 className={styles.title}>{title}</h2>
      {/* Row Container */}
      <div className="relative flex items-center">
        {/* Scrollable Movie Container */}
        <div className={styles.row}>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={52}
            slidesPerView={3.2}
            breakpoints={{
              0: { slidesPerView: 1.5 },
              640: { slidesPerView: 3.2 },
              1024: { slidesPerView: 5.8 },
            }}
          >
            {movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Card movies={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
