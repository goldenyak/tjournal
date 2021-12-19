import React from 'react';
import {Input} from "@material-ui/core";
import styles from './WriteForm.module.scss';
import dynamic from "next/dynamic";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false});

interface WriteFormProps {
    title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({title}) => {

    return (
        <div>
            <Input classes={{root: styles.titleField}} placeholder='Заголовок' defaultValue={title}/>
            <Editor />
        </div>
    );
};

export default WriteForm;
