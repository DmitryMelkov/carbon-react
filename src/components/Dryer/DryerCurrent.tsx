import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import useFetchData from '../../hooks/useFetchData';
import TableComponent from '../TableParams/TableParams';
import styles from './DryerCurrent.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BtnDefault from '../BtnDefault/BtnDefault';
import { DryerData } from '../../types/dryerDataTypes';

interface DryerCurrentProps {
  url: string;
  title: string;
}

const DryerCurrent: React.FC<DryerCurrentProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<DryerData>(url);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = 3;

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (loading) {
    return (
      <div className={styles['spinnerContainer']}>
        <div className={styles['spinner']}></div>
      </div>
    );
  }

  if (!data) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['tab-sushilka']}>
      <h2 className={`${styles['tab-sushilka__content-title']} title-reset`}>{title}</h2>

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
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Температуры" data={data.temperatures || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Разрежения" data={data.vacuums || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Горелка" data={data.gorelka || null} />
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
