// import { useState } from "react";

export default function ConfirmSaveModal({
  show,
  onConfirm,
  onCancel,
}: {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmSaveLabel"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="confirmSaveLabel" className="modal-title">
                Confirm Save
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCancel}
              />
            </div>
            <div className="modal-body">
              Are you sure you want to save the changes?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onConfirm}
              >
                Yes, Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
