import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const UserDetails = () => {
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    return (
        <div>
            userName: {userInfo.name}
        </div>
    );
};

export default UserDetails;