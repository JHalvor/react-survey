export default function Checkboxes({ handleChange, formData }) {
    return (
        <ul>
            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value="swimming"
                    checked={formData["spend-time"].includes("swimming")}/>
                Swimming</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox"
                    onChange={handleChange} 
                    value="bathing"
                    checked={formData["spend-time"].includes("bathing")}/>
                Bathing</label>
            </li>
            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value="chatting"
                    checked={formData["spend-time"].includes("chatting")}/>
                Chatting</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time"
                    type="checkbox"
                    onChange={handleChange}
                    value="noTime"
                    checked={formData["spend-time"].includes("noTime") === true}/>
                I don't like to spend time with it</label>
            </li>
        </ul>
    );
  }