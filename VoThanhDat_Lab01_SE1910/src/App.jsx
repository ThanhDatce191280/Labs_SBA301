import AppFooter from "./components/AppFooter";
import {AppNavBar} from "./components/Navbar.jsx";
import {OrchidExplorer} from "./components/OrchildExplorer";
import {OrchildList} from "./components/OrchildList";
import {UserContext} from "./context/UserContext.js";

const currentUser = {
    name: "DatVTCE191280",
    role: "Learner"
};
function App() {
    return (
        <UserContext.Provider value={currentUser}>
            <>
                <AppNavBar />
                <main>
                    <OrchildList />
                </main>
                <AppFooter />
            </>
        </UserContext.Provider>
    );
}
export default App;