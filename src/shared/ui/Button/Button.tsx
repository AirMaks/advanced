import { cn } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import Loader from "../Loader/Loader";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted"
}

export enum ButtonSize {
    m = "size_m",
    l = "size_l",
    xl = "size_xl"
}

interface LoaderOptionsProps {
    loaderSize?: string;
    loaderType?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    rounded?: boolean;
    bold?: boolean;
    semibold?: boolean;
    small?: boolean;
    w100?: boolean;
    yellow?: boolean;
    red?: boolean;
    blue?: boolean;
    green?: boolean;
    black?: boolean;
    grey?: boolean;
    loader?: boolean;
    border?: boolean;
    loaderOptions?: LoaderOptionsProps;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        size = ButtonSize.m,
        rounded,
        bold,
        small,
        semibold,
        w100,
        yellow,
        red,
        blue,
        green,
        black,
        grey,
        disabled,
        loader,
        loaderOptions,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
        [cls.rounded]: rounded,
        [cls.semibold]: semibold,
        [cls.bold]: bold,
        [cls.small]: small,
        [cls.yellow]: yellow,
        [cls.red]: red,
        [cls.blue]: blue,
        [cls.green]: green,
        [cls.black]: black,
        [cls.grey]: grey,
        [cls.disabled]: disabled
    };

    return (
        <div className={cn(cls.Button, { [cls.w100]: w100 }, [className])}>
            <button className={cn("", mods, [className])} type="button" {...otherProps} disabled={disabled}>
                {children}
            </button>
            {loader && <Loader size={loaderOptions?.loaderSize} type={loaderOptions?.loaderType} />}
        </div>
    );
};
