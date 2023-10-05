import ThemeToggle from "../ui/themeToggle/ThemeToggle";

export default function Header() {
  
  return (
    <header className="header-container">
      <h1 className="header-title">Where in the world?</h1>
      <ThemeToggle />
    </header>
  )
}