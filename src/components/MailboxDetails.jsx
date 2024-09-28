import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );
  console.log(selectedLetters);
  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      <div className="mail-box">
        <h3>Details</h3>
        <p> Boxholder: {selectedBox.boxHolder}</p>
        <p> Box Size: {selectedBox.boxSize}</p>
      </div>
      <div className="letters">
        <h3>Letters</h3>
        <p> Dear ,</p>
        <p>{selectedLetters.message}</p>
      </div>
    </>
  );
};

export default MailboxDetails;
