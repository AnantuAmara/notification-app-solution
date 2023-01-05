const Notification = (props) => {
  //  Write your code here.
  const { className, message, iconUrl } = props;
  return (
    <div className={className}>
      <img class="icon" src={iconUrl} />
      <p className="paragraph">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="heading">Notifications</h1>
    <div class="notification-container">
      <Notification
        className="information"
        message="Information Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        message="Success Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        message="Warning Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error"
        message="Error Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
