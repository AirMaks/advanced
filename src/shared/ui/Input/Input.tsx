import { cn } from "shared/lib/classNames/classNames";
import { InputHTMLAttributes, memo, useEffect, useRef, ChangeEvent } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    rounded?: boolean;
    border?: boolean;
    focusOutline?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, type = "text", placeholder, autofocus, rounded = true, border = true, focusOutline, ...otherProps } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cn(
                cls.input,
                {
                    [cls.rounded]: rounded,
                    [cls.border]: border,
                    [cls.outlined]: focusOutline
                },
                [className]
            )}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
