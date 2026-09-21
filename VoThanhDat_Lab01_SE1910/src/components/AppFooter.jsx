import { useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../context/UserContext";
export function AppFooter() {
    const currentUser = useContext(UserContext);
    return (
        <footer className="border-top py-lg-4 mt-lg-5 bg-light">
            <Container className="small text-muted">
                SBA301 Slot 04 practice - current learner: {currentUser?.name ?? "Guest"}
            </Container>
        </footer>
    );
}
export default AppFooter;