import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "../AuthDialog.module.scss";
import ArrowBack from "@material-ui/icons/ArrowBack";
import {Button, TextField, Typography} from "@material-ui/core";
import {FormField} from "../../FormField";
import { LoginFormSchema } from '../../utils/schemas/loginValidation';

interface LoginFormProps {
    onOpenRegister: () => void
    onOpenLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({onOpenRegister, onOpenLogin}) => {

    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = data => console.log(data);
    console.log(form.formState.errors)

    return (
        <div>
            <div className={styles.backTitle} onClick={onOpenLogin}>
                <ArrowBack className={styles.backTitleIcon}/>
                <Typography  className={styles.backTitleText}>К авторизации</Typography>
            </div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта"/>
                    <FormField name="password" label="Пароль"/>
                    <div className="d-flex align-center justify-between mt-20">
                        <Button color="primary" variant="contained">
                            Войти
                        </Button>
                        <Button onClick={onOpenRegister} color="primary" variant="text">
                            Регистрация
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default LoginForm;
