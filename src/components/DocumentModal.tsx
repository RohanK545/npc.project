"use client";

import React from "react";

interface DocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}

const DocumentModal: React.FC<DocumentModalProps> = ({
    isOpen,
    onClose,
    pdfUrl,
    title,
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop-custom animate-fade-in"
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                backdropFilter: "blur(4px)",
            }}
        >
            <div
                className="modal-content animate-slide-up"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "90%",
                    height: "90%",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <div
                    className="modal-header d-flex justify-content-between align-items-center p-3"
                    style={{
                        background: "linear-gradient(90deg, #1d0a69 0%, #162f6a 100%)",
                        color: "white",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                >
                    <h5 className="modal-title m-0 fw-bold">{title}</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={onClose}
                        aria-label="Close"
                        style={{ filter: "brightness(0) invert(1)" }}
                    ></button>
                </div>
                <div className="modal-body p-0 flex-grow-1 bg-light">
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                        title={title}
                    ></iframe>
                </div>
                <div className="modal-footer p-3 border-top d-flex justify-content-end bg-white">
                    <button
                        className="btn btn-primary px-4"
                        onClick={onClose}
                        style={{ backgroundColor: "#1d0a69", border: "none" }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DocumentModal;
