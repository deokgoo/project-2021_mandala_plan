import { useRef } from 'react';

const useSettingWeb = () => {
  const refs = {
    titleRef: useRef<HTMLInputElement>(null),
    descriptionRef: useRef<HTMLInputElement>(null),
    themeRef: useRef<HTMLInputElement>(null),
  }

  return {
    refs,
  }
}

export default useSettingWeb;