import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>HomePage</h1>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
