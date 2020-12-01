import React, {useEffect, useState} from 'react';
import style from './app.module.scss';
import { userType } from './type';

const App2 = () => {
    const [user, setUser] = useState<userType>();
    useEffect(() => {
        setUser({
            name: 'dongryun',
            gender: 'woman',
            age: 28,
        })
    }, [])
    return (
        <div className={style.App}>
            {JSON.stringify(user)}
        </div>
    );
};

export default App2;
