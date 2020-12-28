import { stateType } from './type';
import styles from './style.module.scss';

const initialState: stateType = {
  dreamCore: {
    core: {title: 'coreTitle', description: 'coreDescription'},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream0: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream1: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream2: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream3: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream4: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream5: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream6: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  dream7: {
    core: {title: '', description: ''},
    side: [
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
      {title: '', description: ''},
    ]
  },
  mandalaState: {
    isCore: false,
    dreamNum: 0,
    unitNum: 0,
  },
  themes: {
    currentTheme: 0,
    theme0: {
      core: styles.color2,
      dream: styles.color1,
      side: styles.color5,
    }
  }
};

export default initialState;
