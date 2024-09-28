const LetterForm = (props) => {
  const mailboxOptions = props.mailboxes.map((mailbox) => (
    <option key={mailbox._id}>Mailbox {mailbox._id}</option>
  ));

  return (
    <div>
      <h1> New Letter</h1>
      <form>
        <label htmlFor="mailbox">Select a Mailbox</label>
        <select name="mailbox" id="mailbox">
          {mailboxOptions}
        </select>
      </form>
    </div>
  );
};

export default LetterForm;
