const BaseButton = ({ context, handleClick }) => {
  return <button onClick={handleClick}>{context}</button>;
};
export default BaseButton;
