export const Footer = ({ setCount }) => {
  return (
    <footer>
      Footer
      <button id="1" onClick={() => setCount(0)}>
        Reset
      </button>
    </footer>
  );
};
