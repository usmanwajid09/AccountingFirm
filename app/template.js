import GSAPAnimation from "./components/GSAPAnimation";

export default function RootTemplate({ children }) {
  return (
    <>
      <GSAPAnimation />
      {children}
    </>
  );
}
