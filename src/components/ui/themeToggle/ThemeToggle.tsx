export default function ThemeToggle() {
  const body = document.querySelector("body");
  enum THEME {
    dark = "dark",
    light = "light"
  }

  function setTheme(theme: THEME): void {
    body?.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }

  function toggleTheme() {
    body?.getAttribute("data-theme") === "dark" 
    ?
    setTheme(THEME.light)
    :
    setTheme(THEME.dark)
  }

  return (
    <button 
    className="theme-toggle-button" 
    onClick={ () => toggleTheme() }
    >[icon] Dark Mode</button>
  )
}