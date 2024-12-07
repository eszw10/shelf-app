import { BookCopy, BookOpen, UserRoundPen } from "lucide-react";
import PropTypes from "prop-types";

const Statistic = ({ data }) => {
  const stats = () => {
    switch (data.title) {
      case "Total Books":
        return <BookCopy className={`text-${data.color}-400`} />;
      case "Author":
        return <UserRoundPen className={`text-${data.color}-400`} />;
      default:
        return <BookOpen className={`text-${data.color}-400`} />;
    }
  };
  return (
    <div className="flex items-center gap-3 justify-center bg-white p-5 rounded-xl shadow-sm">
      <div className={`bg-${data.color}-200 p-3 rounded-full`}>{stats()}</div>
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
