import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  console.log(selectedBox);

  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      <div className="mail-box">
        <h3>Details</h3>
        <p> Boxholder: {selectedBox.boxHolder}</p>
        <p> Box Size: {selectedBox.boxSize}</p>
      </div>
    </>
  );
};

export default MailboxDetails;
