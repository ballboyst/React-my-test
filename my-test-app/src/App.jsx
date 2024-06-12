import { Card } from "./components/Card";
import { useContext } from "react"
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
    const [isAdmin, setIsAdmin] = useContext(AdminFlagContext);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    );
};
