import type { LoadingSize } from "../models";

interface ILoadingProps {
  size?: LoadingSize;
}

const Loading = ({ size = "loading-lg" }: ILoadingProps) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className={`loading loading-ring ${size}`}>loading...</span>
    </div>
  );
};

export default Loading;
