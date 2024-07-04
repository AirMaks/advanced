import cn from "classnames";
import cls from "./PageError.module.scss";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
    className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const reload = () => location.reload();
    const { t } = useTranslation();
    return (
        <div className={cn(cls.PageError, {}, [className])}>
            <p>{t("Произошла ошибка, попробуйте обновить страницу")}</p>
            <Button onClick={reload}>{t("Обновить страницу")}</Button>
        </div>
    );
};
