interface HeaderProps {
  header: string;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <>
      <header>
        <h1>{header}</h1>
      </header>
    </>
  );
};

export default Header;
