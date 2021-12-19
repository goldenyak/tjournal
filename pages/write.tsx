import React from 'react';
import {NextPage} from "next";
import {TextField} from '@material-ui/core';

interface WritePageProps {

}

const WritePage: NextPage = () => {
    return (
        <div style={{backgroundColor: '#fff'}}>
            <TextField placeholder='Заголовок'/>

        </div>
    );
};

export default WritePage;

