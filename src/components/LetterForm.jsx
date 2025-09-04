import { useState } from "react";
import { useNavigate } from "react-router";



const letterExample = {
    mailboxId: "",
    recipient: '',
    message: '',
};

const LetterForm = ({ mailboxes, addLetter }) => {

    const [formData, setFormData] = useState(letterExample)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const numMailboxId = Number(formData.mailboxId)
        addLetter({ ...formData, mailboxId: numMailboxId })
        navigate(`/mailboxes/${numMailboxId}`)
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }



    return (
        <>
            <h2>Add Letter</h2>
            <form onSubmit={handleSubmit}>
                <label>Send to</label>
                <select name="mailboxId" value={formData.mailboxId}
                    onChange={handleChange}>
                    <option value="">Select a MailBox</option>
                    {mailboxes.map((box) => (
                        <option key={box._id} value={box._id}>
                            Mailbox #{box._id}
                        </option>
                    ))}
                </select>
                <label>Recipient Name:</label>
                <input
                    type="text"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    required
                />

                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send Letter</button>
            </form>
        </>
    )
}

export default LetterForm