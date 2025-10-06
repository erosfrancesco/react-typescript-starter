import React, {createContext, useContext, useState, type ReactNode} from "react";
import "./useModal.css";

export interface IModalContext {
    showModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export default function ModalProvider({children}) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>(null);

    const showModal = (modalContent: ReactNode) => {
        setContent(modalContent);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{showModal, closeModal}}>
            {children}
            {open && (
                <div className="modalWrapper" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <button className="close" onClick={closeModal}>
                            X
                        </button>
                        <div className="modalContentWrapper border-secondary glass">{content}</div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
}

export function useModal(): IModalContext {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useModal must be used within a ModalProvider");
    return ctx;
}
