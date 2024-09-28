const LetterForm = (props) => {
  const mailboxOptions = props.mailboxes.map((mailbox) => (
    <option key={mailbox._id}>Mailbox {mailbox._id}</option>
  ));
  const [formData, setFormData] = useState({
    mailboxId: null,
    recipient: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddLetter(formData);
  };

  return (
    <div>
      <h1> New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select name="mailboxId" id="mailboxId" onChange={handleChange}>
          {mailboxOptions}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          placeholder="Recipient Name"
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send letter</button>
      </form>
    </div>
  );
};

export default LetterForm;
