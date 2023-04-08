import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import { loginByEmail } from "../../model/services/loginByEmail/loginByEmail";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import Logo from "shared/assets/icons/sidebar/logo-long.svg";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider/config/store";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { email, password, error, isLoading } = useAppSelector(getLoginState);

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByEmail({ email, password }));
    }, [dispatch, password, email]);

    const buttonProps = {
        loader: isLoading,
        loaderOptions: { loaderSize: "xs", loaderType: "dots" },
        rounded: true,
        w100: true,
        black: true,
        disabled: isLoading
    };

    return (
        <div className={cn(cls.LoginForm, {}, [className])}>
            <div className={cls.modalBox}>
                <Logo width={220} className={cls.Logo} />
                <Text text="Войти в систему" bold middle center className={cls.text} />
                {error && <Text color="red" text={`${t("Пользователь с такой почтой не найден")}.`} />}
                <Input autofocus type="text" className={cls.input} placeholder={t("Введите логин")} onChange={onChangeEmail} value={email} />
                <Input type="password" className={cls.input} placeholder={t("Введите пароль")} onChange={onChangePassword} value={password} />
                <Button className={cls.loginBtn} {...buttonProps} onClick={onLoginClick}>
                    {t("Войти")}
                </Button>
            </div>
        </div>
    );
});
