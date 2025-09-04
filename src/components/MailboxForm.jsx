import { useState } from "react";
import { useNavigate } from "react-router";

const mailboxExample = {
    boxSize: "",
    boxholder: ""
}

const mailboxForm = (props) => {
    const [formData, setFormData] = useState(mailboxExample)
    const navigate = useNavigate()

    const hundleSubmit = (event) => {
        event.preventDefault()
        props.addBoxes(formData)
        setFormData(mailboxExample)
        navigate("/mailboxes")
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <>
            <h2>New mailbox</h2>
            <form onSubmit={hundleSubmit}>
                <label htmlFor="boxholder"> Box Holder:</label>
                <input
                    type="text"
                    name="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize"> Box Size:</label>
                <input
                    type="text"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default mailboxForm