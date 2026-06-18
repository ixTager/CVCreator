import { observer } from "mobx-react-lite";
import CVStore from "../../store/CV";
import "../../shared/styles/Input.css";

const Position = observer(() => {
    const handlePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
        CVStore.setPosition(CVStore.id, e.target.value);
    };

    return (
            <input
                type="text"
                value={CVStore.experience[CVStore.id]?.[0] || ""}
                placeholder="Position"
                onChange={handlePosition}
            />
    );
});

export default Position;