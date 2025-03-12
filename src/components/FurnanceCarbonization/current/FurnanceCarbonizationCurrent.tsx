import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type SwiperType from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import TableComponent from '../../../ui/TableParams/TableParams';
import styles from './FurnanceCarbonizationCurrent.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BtnDefault from '../../../ui/BtnDefault/BtnDefault';
import { FurnanceCarbonizationData, transformIM, transformLevels } from '../../../types/FurnanceCarbonizationTypes';
import TableHeader from '../../../ui/Tableheader/TableHeader';
import useFurnaceCarbonizationMode from '../../../hooks/useFurnaceCarbonizationMode';
import Loader from '../../../ui/loader/Loader';
import { useFetchData } from '../../../hooks/useFetchData';

interface FurnanceCarbonizationCurrentProps {
  url: string;
  title: string;
}

const FurnanceCarbonizationCurrent: React.FC<FurnanceCarbonizationCurrentProps> = ({ url, title }) => {
  const { loading, data } = useFetchData<FurnanceCarbonizationData>(url);
  const furnaceMode = useFurnaceCarbonizationMode(data);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = 5;

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
    <div className={styles['tab-pc']}>
      <TableHeader title={title} furnaceMode={furnaceMode} />

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
              <TableComponent title="Температуры" unit="°C" data={data.temperatures || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Давления" unit="кгс/м2" data={data.pressures || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Разрежения" unit="кгс/см2" data={data.vacuums || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Горелка" data={data.gorelka || null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Уровни" unit="мм" data={data.levels ? transformLevels(data.levels) : null} />
            </SwiperSlide>
            <SwiperSlide className={styles['tab-swiper__slider-slide']}>
              <TableComponent title="Индикаторы состояния" data={data.im ? transformIM(data.im) : null} />
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

export default FurnanceCarbonizationCurrent;
