const MailboxForm = () => {
  return (
    <>
      <h1>New Mailbox</h1>
      <form>
        <label htmlFor="boxholder">Enter the name of the boxholder</label>
        <input type="text" name="boxholder" />
        <label htmlFor="box-size">
          {" "}
          Choose a mailbox size{" "}
          <select name="box-size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default MailboxForm;
