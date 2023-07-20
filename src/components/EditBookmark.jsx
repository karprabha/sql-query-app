import { useState } from "react";

const EditBookmark = ({ bookmark, onClose, onSave }) => {
    const [customBookmarkName, setCustomBookmarkName] = useState(
        bookmark?.name || ""
    );

    const handleRenameBookmark = () => {
        onSave(customBookmarkName);
    };

    return (
        <div>
            <input
                type="text"
                value={customBookmarkName}
                onChange={(event) => setCustomBookmarkName(event.target.value)}
            />
            <button onClick={handleRenameBookmark}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default EditBookmark;
