# carbon-react

Этот репозиторий содержит клиентскую часть системы для мониторинга и управления производством карбона. Проект построен на базе React с использованием Vite для сборки, Material-UI для компонентов интерфейса и Chart.js для визуализации данных. Клиентская часть взаимодействует с backend-сервером через REST API для получения данных о состоянии оборудования.

## Основные функции

- **Мониторинг оборудования:** Отображение текущих параметров оборудования (температуры, давления, уровни и т.д.) в реальном времени.
- **Мнемосхемы:** Визуализация состояния оборудования с помощью интерактивных мнемосхем.
- **Графики:** Построение графиков изменения параметров за выбранный интервал времени.
- **Управление интервалами:** Возможность выбора интервала времени для отображения данных (5 минут, 10 минут, 30 минут, 1 час).

## Технологии

- **React:** Библиотека для построения пользовательского интерфейса.
- **Vite:** Инструмент для сборки и разработки фронтенд-приложений.
- **Material-UI (MUI):** Библиотека компонентов для создания современного интерфейса.
- **Chart.js:** Библиотека для построения графиков.
- **React Router:** Маршрутизация между страницами приложения.
- **Framer Motion:** Анимации и плавные переходы между компонентами.
- **Swiper:** Библиотека для создания слайдеров.
- **Sass:** Препроцессор CSS для стилизации компонентов.

## Установка и запуск

Клонирование репозитория:

```bash
git clone https://github.com/DmitryMelkov/carbon-react
```

Установка зависимостей:

```bash
npm install
```

## Запуск сервера:

```bash
npm run dev
```

## Структура проекта

- **src/:** Основная директория с исходным кодом.
- **App.tsx** Точка входа в приложение.
- **pages/** Страницы приложения (например Home, DryerMnemo, DryerCurrent).
- **components/** Компоненты крупных блоков интерфейса (например графики, объекты и его составные части).
- **ui/** Компоненты интерфейса переиспользуемые(например кнопки, лоадеры).
- **hooks/** Кастомные хуки для работы с данными и состоянием.
- **utils/** Вспомогательные функции (например для работы с данными).
- **styles/** Стили проекта (SCSS).
- **types/** Типы TypeScript для данных и состояний.
