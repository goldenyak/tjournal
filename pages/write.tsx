import React from 'react';
import {NextPage} from "next";
import {TextField} from '@material-ui/core';
import {MainLayout} from "../layouts/MainLayout";

interface WritePageProps {

}

const WritePage: NextPage = () => {
    return (
        <MainLayout>
            <div style={{backgroundColor: '#fff'}}>
                <TextField placeholder='Заголовок'/>
            </div>
        </MainLayout>
    );
};

export default WritePage;

