import "./Layout.css"

const Layout = (props) => {
  const { children } = props;
  return <div className="layout-container">{children}</div>;
};

export default Layout;
