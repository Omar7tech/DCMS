import RouterRoutes from "./Router/Routes";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <div className='overflow-x-hidden bg-background text-foreground'>
          <RouterRoutes />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App
