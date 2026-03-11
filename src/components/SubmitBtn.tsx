interface ISubmitBtnProps {
  text: string;
}

const SubmitBtn = ({ text }: ISubmitBtnProps) => {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};

export default SubmitBtn;
