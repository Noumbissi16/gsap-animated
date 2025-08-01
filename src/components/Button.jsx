import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <div
      id={id}
      className={clsx(
        containerClass,
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
      )}
    >
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
};

export default Button;
