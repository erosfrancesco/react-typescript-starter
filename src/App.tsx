import React from "react";
import "./App.css";

import HelloWorld from "components/HelloWorld";
import ModalProvider from "contexts/useModal";
import HexGround from "components/Hexground";
import WidgetBoard from "components/WidgetBoard";

const App: React.FC = () => (
    <ModalProvider>
        <HexGround />
        <div className="glass" style={{position: "absolute", padding: "0.5rem"}}>
            <HelloWorld />
        </div>
        <WidgetBoard />
    </ModalProvider>
);

export default App;
