import React from "react";
import HelloWorld from "components/HelloWorld";
import ModalProvider from "contexts/useModal";
import HexGround from "components/Hexground";

import "./App.css";

const App: React.FC = () => (
    <ModalProvider>
        <HexGround />
        <div style={{position: "absolute", padding: "0.5rem"}}>
            <HelloWorld />
        </div>
    </ModalProvider>
);

export default App;
