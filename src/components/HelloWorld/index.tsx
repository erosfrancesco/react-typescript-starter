import {useModal} from "contexts/useModal";
import React from "react";

const HelloWorld: React.FC = () => {
    const {showModal} = useModal();

    const openModal = () => showModal(<div>Modal</div>);

    return (
        <div>
            <h1>Hello World</h1>

            <hr />

            <h3>Environmental variables:</h3>
            <p>
                process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
            </p>
            <p>
                process.env.NAME: <b>{process.env.NAME}</b>
            </p>
            <p>
                process.env.VERSION: <b>{process.env.VERSION}</b>
            </p>

            <button onClick={openModal}>Click modal</button>
        </div>
    );
};

export default HelloWorld;
