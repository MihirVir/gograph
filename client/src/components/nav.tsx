import { NavProps } from "../types/nav-type";

const data = ["user", "playlist", "music"];

const Nav = ({ changeState }: NavProps) => {
  return (
    <header className="w-screen">
      <nav
        className="p-2 flex justify-between"
        style={{ boxShadow: "4px 0px 4px rgba(0,0,0,.1)" }}
      >
        <h1 className="text-lg font-semibold">Mihir</h1>
        <div className="nav-items w-1/4">
          <ul className="flex justify-around">
            {data.map((item) => (
              <li
                className="cursor-pointer hover:underline hover:text-slate-700 transition-all duration-100"
                key={item}
                onClick={() => changeState(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
