const ToolbarButton = ({
  children,
  isActive = false,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white text-gray-600 ${
        isActive ? "bg-white" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default ToolbarButton;
