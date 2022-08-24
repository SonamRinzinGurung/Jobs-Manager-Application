import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";
import { FaBusinessTime, FaCalendarCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaBusinessTime />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#59E15E",
      bcg: "#c5f5c7",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <ImCross />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
