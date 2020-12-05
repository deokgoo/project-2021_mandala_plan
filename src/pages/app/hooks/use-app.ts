import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userType } from '../type';

const useApp = () => {
  const [user, setUser] = useState<userType>();
  const history = useHistory();

  const goPage = () => {
    history.push({
      pathname: '/test',
    })
  }

  useEffect(() => {
    setUser({
      name: 'deok',
      gender: 'man',
      age: 28,
    })
  }, []);

  return {
    user,
    goPage,
  }
}

export default useApp;