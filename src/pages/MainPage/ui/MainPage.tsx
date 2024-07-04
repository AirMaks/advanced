import { BugButton } from "app/providers/ErrorBoundary";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
    return (
        <>
            <Input placeholder="введите" focusOutline={true} />
            <BugButton />
        </>
    );
};

export default MainPage;
