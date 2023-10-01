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

  function getStoredTheme() {
    const userTheme = localStorage.getItem("selectedTheme");
    switch (userTheme) {
      case "dark": setTheme(THEME.dark);
        break;
      default: setTheme(THEME.light);
    }
  }
  
  getStoredTheme();

  return (
    <button 
    className="theme-toggle-button" 
    onClick={ () => toggleTheme() }
    >[icon] Dark Mode</button>
  )
}