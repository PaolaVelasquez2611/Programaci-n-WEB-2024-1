import { useState } from "react";
import './TagInput.css'

export const TagInput = ({ tags, setTags, labelText }) => {
    const [tag, setTag] = useState('');

    const handleKeyDown = (e) => {
        const code = e.keyCode || e.which;
        const newTag = tag.trim();

        if ((code === 13 || code === 188) && newTag) {
            if (!tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setTag('');
        }
    };

    const deleteTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className="tag-input-box">
            <label htmlFor="tag-input">{labelText}</label>
            {/* <p>Press enter to add a new keyword</p> */}
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <div className="tag" key={index}>
                        <span className="name">{tag}</span>
                        <span 
                            className="icon" 
                            onClick={() => deleteTag(index)}
                        >&times;</span>
                    </div>
                ))}
                <input
                    type="text"
                    id="tag-input"
                    placeholder="Add tags"
                    value={tag}
                    maxLength={50}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};