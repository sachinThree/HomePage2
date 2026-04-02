const GradientButton = ({
    text,
    onClick,
    icon,
    fullWidth = false,
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`
        flex items-center justify-center gap-2 font-worksans
        ${fullWidth ? "w-auto" : "min-w-[180px] lg:min-w-[209px]"}
        min-h-[40px] lg:min-h-[46px]
        px-4
        rounded-full
        font-worksans
        text-sm md:text-[16px]
        text-black
        bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)]
        hover:opacity-90 transition-all duration-300
        cursor-pointer
        ${className}
      `}
        >
            {text}
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default GradientButton;