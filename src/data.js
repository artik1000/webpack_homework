export default [
  {
    name: 'header',
    text: 'Weather sounds',
  },
  {
    name: 'background',
  },
  {
    name: 'weather-card',
    type: 'summer',
    background: '/img/summer-bg.jpg',
    selected: true,
    sound: '/sounds/summer.mp3',
    icon: '/img/icons/sun.svg',
  },
  {
    name: 'weather-card',
    type: 'rain',
    background: '/img/rainy-bg.jpg',
    selected: false,
    sound: '/sounds/rain.mp3',
    icon: '/img/icons/cloud-rain.svg',
  },
  {
    name: 'weather-card',
    type: 'winter',
    background: '/img/winter-bg.jpg',
    selected: false,
    sound: '/sounds/winter.mp3',
    icon: '/img/icons/cloud-snow.svg',
  },
];
