import React from 'react';
import {Button, Dialog, DialogContent, DialogContentText, TextField, Typography} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from './AuthDialog.module.scss';
import {MainForm} from "./Form/Main";

interface AuthDialogProps {
    onClose: () => void,
    visible: boolean,
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {

    const [formType, setFormType] = React.useState<"main" | "login" | "register">("main")

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={visible}
            onClose={onClose}
        >
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        {formType === "main" && <MainForm onOpenLogin={() => setFormType("login")}/>}
                        {formType === "login" && <div>
                            <div className={styles.backTitle} onClick={() => setFormType("main")}>
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
                                <div className="d-flex align-center justify-between mt-20">
                                    <Button color="primary" variant="contained">
                                        Войти
                                    </Button>
                                    <Button color="primary" variant="text">
                                        Регистрация
                                    </Button>
                                </div>

                            </form>
                        </div>}
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};
