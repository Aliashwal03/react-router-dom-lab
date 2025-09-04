import { Link } from "react-router";

const mailboxList = (props) => {
    return (
        <>
            <h2>Boxes</h2>
            <ul>
                {props.boxes.map((currentBoxes) => (
                    <li key={currentBoxes._id}>
                        <div className="mail-box">
                            <Link to={`/mailboxes/${currentBoxes._id}`}>
                                <p>Box #{currentBoxes._id}</p>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default mailboxList;