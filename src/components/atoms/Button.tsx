export interface Props {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="coop-form__row">
      <button className="coop-btn coop-btn--primary" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
