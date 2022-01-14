import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import styles from "../AuthDialog.module.scss";
import ArrowBack from "@material-ui/icons/ArrowBack";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/schemas/loginValidation";
import {FormField} from "../../FormField";

interface RegisterFormProps {
    onOpenLogin: () => void,
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin}) => {

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
                <Typography  className={styles.backTitleText}>Вернуться</Typography>
            </div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="fullname" label="Имя и фамилия"/>
                    <FormField name="email" label="Почта"/>
                    <FormField name="password" label="Пароль"/>
                </form>
            </FormProvider>

            <div className="mt-20">
                <Button color="primary" variant="contained">
                    Зарегистрироваться
                </Button>
            </div>
        </div>

    )
}