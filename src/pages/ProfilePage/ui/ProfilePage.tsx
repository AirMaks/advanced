import { fetchProfileData, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text } from "shared/ui/Text/Text";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Text text={t("Профиль")} large />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
