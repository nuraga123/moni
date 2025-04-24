import { observer } from "mobx-react-lite";
import Header from "../Table/Header";

const Loading: React.FC = () => {
  return (
    <table>
      <Header />
      {Array.from({ length: 25 }).map((_, rowIndex) => (
        <tr className="flex gap-2" key={rowIndex}>
          {Array.from({ length: 12 }).map((_, cellIndex) => (
            <td
              key={cellIndex}
              className="flex-1 h-5 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded animate-pulse"
            ></td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default observer(Loading);
