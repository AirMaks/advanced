import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
import { memo } from "react";
interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button className={cn(cls.LangSwitcher, {}, [className])} onClick={toggle}>
            {t("Короткий язык")}
        </Button>
    );
});
