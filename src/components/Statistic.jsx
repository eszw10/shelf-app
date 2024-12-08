import { BookCopy, BookOpen, UserRoundPen } from "lucide-react";
import PropTypes from "prop-types";

const Statistic = ({ data }) => {
  const stats = () => {
    switch (data.title) {
      case "Total Books":
        return (
          <div className={`bg-red-200 p-3 rounded-full`}>
            <BookCopy className={`text-red-400`} />
          </div>
        );
      case "Author":
        return (
          <div className={`bg-yellow-200 p-3 rounded-full`}>
            <UserRoundPen className={`text-yellow-400`} />
          </div>
        );
      default:
        return (
          <div className={`bg-blue-200 p-3 rounded-full`}>
            <BookOpen className={`text-blue-400`} />
          </div>
        );
    }
  };
  return (
    <div className="flex items-center gap-3 justify-center bg-white p-5 rounded-xl shadow-sm">
      {stats()}
      <div className="flex flex-col">
        <p className="text-3xl">{data.value}</p>
        <p className="text-slate-400">{data.title}</p>
      </div>
    </div>
  );
};

export default Statistic;

Statistic.propTypes = {
  data: PropTypes.object,
};
