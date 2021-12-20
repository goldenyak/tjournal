import React from 'react';
import {Button, Input} from "@material-ui/core";
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
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button color='primary' variant="contained">
                Опубликовать
            </Button>

        </div>
    );
};

export default WriteForm;
