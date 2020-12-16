import { useEffect, useRef, useState } from 'react';

const useSettingWeb = ({isCore, boxNum}: {isCore: boolean, boxNum?: number}) => {
  const [initialData, setInitialData] = useState<object>();
  const refs = {
    titleRef: useRef<HTMLInputElement>(null),
    descriptionRef: useRef<HTMLInputElement>(null),
    theme: useRef<HTMLInputElement>(null),
  }

  useEffect(() => {
    setInitialData(getCurrentData());
  }, []);

  const updateMandalaData = () => {

  }

  const getCurrentData = ():object => {
    return {
      title: '',
      description: '',
    }
  }

  return {
    refs,
    initialData,
    updateMandalaData,
  }
}

export default useSettingWeb;