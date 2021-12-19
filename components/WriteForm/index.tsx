import React from 'react';
import {Input} from "@material-ui/core";
import styles from './WriteForm.module.scss'

interface WriteFormProps {
    title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({title}) => {
    return (
        <div>
            <Input classes={{root: styles.titleField}} placeholder='Заголовок' defaultValue={title}/>
        </div>
    );
};

export default WriteForm;
