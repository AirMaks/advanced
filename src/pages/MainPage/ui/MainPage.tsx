import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text text={t("Главная страница")} large />
            <Input placeholder="введите" focusOutline={true} />
        </>
    );
};

export default MainPage;
