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
            <h3>Edit Name</h3>
            <div>
                <input
                    type="text"
                    value={customBookmarkName}
                    onChange={(event) =>
                        setCustomBookmarkName(event.target.value)
                    }
                />

                <button onClick={handleRenameBookmark}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditBookmark;
