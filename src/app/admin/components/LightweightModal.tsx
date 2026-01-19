// components/LightweightModal.tsx
import React, { useEffect } from "react";

interface LightweightModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function LightweightModal({
  isOpen,
  onClose,
  title,
  children,
}: LightweightModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-new" onClick={onClose}>
      <div className="cms-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cms-modal-header">
          <h2>{title}</h2>
        </div>

        {/* Body (scrolls) */}
        <div className="cms-modal-body">{children}</div>

        {/* Footer */}
        <div className="cms-modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
