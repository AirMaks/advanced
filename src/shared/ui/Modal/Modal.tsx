import { cn } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { MouseEvent, ReactNode, useCallback, useEffect } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    };
    const closeHandler = useCallback(() => onClose && onClose(), [onClose]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, closeHandler]);
    return (
        <Portal>
            <div className={cn(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={(e: MouseEvent) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
