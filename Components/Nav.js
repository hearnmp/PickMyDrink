import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
  <div className="flex hover:cursor-pointer self-end fixed top-0 right-0 m-3">
    <MenuIcon sx={{ fontSize: 60 }}/>
  </div>
);
}

export default Nav;