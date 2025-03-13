import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import TableComponent from '../../ui/TableParams/TableParams';
import styles from './DryerCurrent.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BtnDefault from '../../ui/BtnDefault/BtnDefault';
import { DryerData } from '../../types/dryerDataTypes';
import TableHeader from '../../ui/Tableheader/TableHeader';
import Loader from '../../ui/loader/Loader';
import { useFetchData } from '../../hooks/useFetchData';

interface DryerCurrentProps {
  url: string;
  title: string;
}

const DryerCurrent: React.FC<DryerCurrentProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<DryerData>(url);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = 2;

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['dryer-current']}>
      <TableHeader title={title} />

      <div className={styles['tab-swiper']}>
        <div className={styles['tab-swiper__box']}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className={styles['tab-swiper__slider']}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={30}
            allowTouchMove={false}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Температуры" data={data.temperatures || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Разрежения" data={data.vacuums || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Горелка" data={data.gorelka || null}  />
            </SwiperSlide>
          </Swiper>
          <div className={styles['tab-swiper__navigation']}>
            <BtnDefault
              onClick={() => swiperRef.current?.slidePrev()}
              icon={<FaChevronLeft />}
              borderRadius={'50%'}
              iconSize="20px"
              disabled={currentIndex === 0}
            />
            <BtnDefault
              onClick={() => swiperRef.current?.slideNext()}
              icon={<FaChevronRight />}
              borderRadius={'50%'}
              iconSize="20px"
              disabled={currentIndex === totalSlides - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryerCurrent;
