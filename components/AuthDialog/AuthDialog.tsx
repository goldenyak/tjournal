import React from 'react';
import {Button, Dialog, DialogContent, DialogContentText, TextField, Typography} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from './AuthDialog.module.scss';
import {MainForm} from "./Form/Main";
import LoginForm from "./Form/Login";
import {RegisterForm} from "./Form/Register";

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
                        {formType === "login" && <LoginForm onOpenRegister={() => setFormType("register")} onOpenLogin={() => setFormType("main")}/>}
                        {formType === "register" && <RegisterForm onOpenLogin={() => setFormType("login")}/>}
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};
