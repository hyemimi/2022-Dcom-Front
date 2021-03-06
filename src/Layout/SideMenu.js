import { Link } from "react-router-dom";

const menuList = [
    { ref: '', label: 'π γν'},
    { ref: 'search', label:'πγμΉκ΅¬ κ²μνκΈ°'},
    { ref: 'search', label:'πγκ·Έλ£Ή κ²μνκΈ°'},
    { ref: 'record', label:'πγλΆμνκΈ°'}
];

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="SideMenu">
        {menuList.map(({label, ref})=>(
            <Link
                key={ref}
                to={ref}>
                <button>{label}</button>
            </Link>
        ))}

      <div className="copyright">Β© DCOM. All Rights Reserved.</div>
    </div>
  );
};

export default SideMenu;
