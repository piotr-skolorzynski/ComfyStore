import { useNavigation } from "react-router";

interface ISubmitBtnProps {
  text: string;
}

const SubmitBtn = ({ text }: ISubmitBtnProps) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner loading-xs">sending...</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
