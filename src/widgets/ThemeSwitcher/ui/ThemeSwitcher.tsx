import { useTheme, Theme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/footer/theme-light.svg";
import DarkIcon from "shared/assets/icons/footer/theme-dark.svg";
import cls from "./ThemeSwitcher.module.scss";
import cn from "classnames";
import { memo } from "react";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cn(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </div>
    );
});
