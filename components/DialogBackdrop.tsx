interface DialogBackdropProps {
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
  }
  
  export function DialogBackdrop({
    isOpen = true,
    onClose = () => {},
    className = "",
  }: DialogBackdropProps) {
    if (!isOpen) return null;
  
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear ${className}`}
        onClick={onClose}
      />
    );
  }