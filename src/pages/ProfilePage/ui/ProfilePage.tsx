import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text } from "shared/ui/Text/Text";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Text text={t("Профиль")} large />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
