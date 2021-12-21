import React from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './AddCommentForm.module.scss'

const AddCommentForm: React.FC = () => {

    const [clicked, setClicked] = React.useState(false);
    const [text, setText] = React.useState('');

    const onAddComment = () => {
        setClicked(false);
        setText('');

    }

    return (
        <div className={styles.form}>
            <Input onFocus={() => setClicked(true)}
                   onChange={e => setText(e.currentTarget.value)}
                   value={text}
                   classes={{root: styles.fieldRoot}}
                   minRows={clicked ? 5 : 2}
                   multiline
                   fullWidth
                   placeholder="Написать комментарий ..."/>
            {clicked && <Button onClick={onAddComment} className={styles.addButton} variant='contained' color="primary">Добавить</Button>}
        </div>
    );
};

export default AddCommentForm;
