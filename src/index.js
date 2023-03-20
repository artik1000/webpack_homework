import data from './data';
import './index.scss';

const root = document.querySelector('#app');
const content = document.createElement('div');
const cardsRaw = document.createElement('div');
const background = document.createElement('div');

function renderItem(block) {
  const h1 = document.createElement('h1');

  if (block.name === 'header') {
    h1.textContent = block.text;
    content.className = 'content';
    root.append(content);
    content.append(h1);
  }

  if (block.name === 'background') {
    background.className = 'background';
    background.style.backgroundImage = `url("${[...data].filter((e) => e.name === 'weather-card' && e.selected === true)[0].background}")`;
    root.append(background);
  }

  if (document.getElementsByClassName('cards-raw').length === 0
      && document.getElementsByClassName('content').length !== 0) {
    cardsRaw.className = 'cards-raw';
    content.append(cardsRaw);
  }

  if (block.name === 'weather-card') {
    const weatherCardWrapper = document.createElement('div');
    weatherCardWrapper.className = 'weather-card__wrapper';
    document.getElementsByClassName('cards-raw')[0].append(weatherCardWrapper);

    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.style.backgroundImage = `url("${block.background}")`;
    weatherCardWrapper.append(weatherCard);

    const weatherCardAudio = document.createElement('audio');
    weatherCardWrapper.append(weatherCardAudio);
    const weatherCardAudioSource = document.createElement('source');
    weatherCardAudioSource.src = block.sound;
    weatherCardAudioSource.type = 'audio/mp3';
    weatherCardAudio.append(weatherCardAudioSource);

    const weatherCardVolumeSlider = document.createElement('input');
    weatherCardVolumeSlider.type = 'range';
    weatherCardVolumeSlider.className = 'weather-card__volume-slider';
    weatherCardVolumeSlider.addEventListener('change', (e) => {
      weatherCardAudio.volume = e.currentTarget.value / 100;
    });
    weatherCardWrapper.append(weatherCardVolumeSlider);

    const weatherCardIcon = document.createElement('div');
    weatherCard.append(weatherCardIcon);
    weatherCardIcon.className = 'weather-card__icon';
    weatherCardIcon.addEventListener('click', () => {
      if (weatherCardAudio.paused) {
        const allAudio = document.querySelectorAll('audio');
        const allBtns = document.querySelectorAll('.weather-card__icon');
        for (let i = 0; i < allAudio.length; i += 1) {
          allAudio[i].pause();
          allBtns[i].classList.remove('weather-card__icon_paused');
        }
        background.style.backgroundImage = `url("${block.background}")`;
        weatherCardIcon.classList.toggle('weather-card__icon_paused');
        weatherCardAudio.play();
      } else {
        weatherCardIcon.classList.toggle('weather-card__icon_paused');
        weatherCardAudio.pause();
      }
    }, false);
    weatherCardIcon.style.backgroundImage = `url("${block.icon}")`;
  }
}

data.forEach(renderItem);
