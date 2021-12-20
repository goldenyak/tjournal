import React from 'react';
import {Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'

const AddCommentForm: React.FC = () => {
    return (
        <div>
            <Input classes={{root: styles.fieldRoot}} fullWidth placeholder="Написать комментарий ..."/>
        </div>
    );
};

export default AddCommentForm;
