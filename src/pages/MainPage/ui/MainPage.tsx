import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

const MainPage = () => {
    const { t } = useTranslation("main");
    const [error, setError] = useState(false);
    const err = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <div>
            {t("Главная страница")}
            <Button theme={ButtonTheme.OUTLINE} onClick={err}>
                {t("Ошибка")}
            </Button>
        </div>
    );
};

export default MainPage;
