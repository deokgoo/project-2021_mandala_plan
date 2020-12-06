import React from 'react';
import style from './app.module.scss';
import useApp from './hooks'

const App = (props: any) => {
  const {user} = useApp();

  return (
    <div className={style.App}>
      {JSON.stringify(user)}
      <button onClick={() => props.history.push('/test')}/>
    </div>
  );
};

export default App;
