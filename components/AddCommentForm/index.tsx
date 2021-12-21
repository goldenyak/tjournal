import React from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'

const AddCommentForm: React.FC = () => {

    const [clicked, setClicked] = React.useState(false)

    return (
        <div>
            <Input onFocus={() => setClicked(true)}
                   classes={{root: styles.fieldRoot}}
                   minRows={clicked ? 5 : 2}
                   multiline
                   fullWidth
                   placeholder="Написать комментарий ..."/>
                <Button className={styles.addButton} variant='contained' color="primary">Добавить</Button>
        </div>
    );
};

export default AddCommentForm;
