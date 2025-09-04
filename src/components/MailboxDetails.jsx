import { useParams } from 'react-router';
const mailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.boxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    );

    return (
        <>
            <h2>Datails</h2>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{selectedBox.boxholder}</dd>
                <dt>Box Size</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
            <h3>Letters</h3>
            {selectedLetters.length === 0 ? (
                <p>No letters yet.</p>
            ) : (
                <ul>
                    {selectedLetters.map((letter, index) => (
                        <li key={index}>
                            <strong>{letter.recipient}</strong>: {letter.message}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default mailboxDetails