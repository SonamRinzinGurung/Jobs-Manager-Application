import { MdQueryStats, MdAddchart } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { TiBusinessCard } from "react-icons/ti";

const links = [
  { id: 1, text: "all jobs", path: "/", icon: <MdQueryStats /> },
  { id: 2, text: "add job", path: "add-job", icon: <MdAddchart /> },
  { id: 3, text: "stats", path: "stats", icon: <ImStatsBars /> },
  { id: 4, text: "profile", path: "profile", icon: <TiBusinessCard /> },
];

export default links;
