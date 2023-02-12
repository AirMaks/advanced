import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    const [error, setError] = useState(false);
    const err = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <div>
            {t("Привет")}
            {t("Главная страница")}
            <button onClick={err}>error</button>
        </div>
    );
};

export default MainPage;
