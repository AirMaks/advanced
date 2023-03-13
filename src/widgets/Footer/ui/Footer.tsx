import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Footer.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(cls.Footer, {}, [className])}>
            <div className={cn(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
            <div>
                © Цифровизация транспорта, 2023 год&nbsp;
                <a href="/" className={cls.license} target="_blank">
                    Лицензионный договор
                </a>
            </div>
        </div>
    );
};
