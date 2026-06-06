export default function Painel({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}>
        
      {children}
    </div>
  );
}