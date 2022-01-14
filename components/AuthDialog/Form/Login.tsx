import React from 'react';
import styles from "../AuthDialog.module.scss";
import ArrowBack from "@material-ui/icons/ArrowBack";
import {Button, TextField, Typography} from "@material-ui/core";

interface LoginFormProps {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({onOpenRegister, onOpenLogin}) => {
    return (
        <div>
            <div className={styles.backTitle} onClick={onOpenLogin}>
                <ArrowBack className={styles.backTitleIcon}/>
                <Typography  className={styles.backTitleText}>К авторизации</Typography>
            </div>
            <form>
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
                <div className="d-flex align-center justify-between mt-20">
                    <Button color="primary" variant="contained">
                        Войти
                    </Button>
                    <Button onClick={onOpenRegister} color="primary" variant="text">
                        Регистрация
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;
