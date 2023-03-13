import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import cls from "./Navbar.module.scss";
import BurgerIcon from "shared/assets/icons/burger.svg";

interface NavbarProps {
    className?: string;
    onToggle?: () => void;
    collapsed?: boolean;
}

export const Navbar = ({ className, onToggle, collapsed }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={cn(cls.Navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div data-testid="sidebar-toggle" onClick={onToggle}>
                <BurgerIcon className={cls.Burger} />
            </div>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t("Войти")}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} collapsed={collapsed} />
        </div>
    );
};
