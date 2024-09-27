export default function Checkboxes({ handleChange, formData }) {
    return (
        <ul>
            <li>
                <label>
                    <input
                    name="timeSpent"
                    type="checkbox"
                    onChange={handleChange}
                    value="swimming"
                    checked={formData.timeSpent.includes("swimming")}/>
                Swimming</label>
            </li>
            <li>
                <label>
                    <input 
                    name="timeSpent" 
                    type="checkbox"
                    onChange={handleChange} 
                    value="bathing"
                    checked={formData.timeSpent.includes("bathing")}/>
                Bathing</label>
            </li>
            <li>
                <label>
                    <input
                    name="timeSpent"
                    type="checkbox"
                    onChange={handleChange}
                    value="chatting"
                    checked={formData.timeSpent.includes("chatting")}/>
                Chatting</label>
            </li>
            <li>
                <label>
                    <input 
                    name="timeSpent"
                    type="checkbox"
                    onChange={handleChange}
                    value="noTime"
                    checked={formData.timeSpent.includes("noTime") === true}/>
                I don't like to spend time with it</label>
            </li>
        </ul>
    );
  }