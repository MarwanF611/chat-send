import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:max-w-2x1 md:mx-auto font-poppins">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
