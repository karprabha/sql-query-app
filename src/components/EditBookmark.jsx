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
            <div className="rename-bookmark">
                <input
                    type="text"
                    value={customBookmarkName}
                    onChange={(event) =>
                        setCustomBookmarkName(event.target.value)
                    }
                />

                <div className="button-container">
                    <button
                        onClick={handleRenameBookmark}
                        className="button save-button"
                    >
                        Save
                    </button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditBookmark;
