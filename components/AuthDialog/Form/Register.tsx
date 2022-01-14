import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import styles from "../AuthDialog.module.scss";
import ArrowBack from "@material-ui/icons/ArrowBack";

interface RegisterFormProps {
    onOpenLogin: () => void,
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin}) => {
    return (
        <div>
            <div className={styles.backTitle} onClick={onOpenLogin}>
                <ArrowBack className={styles.backTitleIcon}/>
                <Typography  className={styles.backTitleText}>Вернуться</Typography>
            </div>
            <form>
                <TextField
                    className="mb-20"
                    size="small"
                    label="Имя и фамилия"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    className="mb-20"
                    size="small"
                    label="Почта"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    size="small"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                />
            </form>
            <div className="mt-20">
                <Button color="primary" variant="contained">
                    Зарегистрироваться
                </Button>
            </div>
        </div>

    )
}