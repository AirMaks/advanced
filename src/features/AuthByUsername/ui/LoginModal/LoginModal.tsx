import { cn } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    collapsed?: boolean;
}

export const LoginModal = ({ className, isOpen, onClose, collapsed }: LoginModalProps) => (
    <Modal collapsed={collapsed} className={cn(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        <LoginForm />
    </Modal>
);
