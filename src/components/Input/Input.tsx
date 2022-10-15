const defaultClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  dataTestId,
}: any) => {
  return (
    <div className="mt-5">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        className={defaultClass + customClass}
        placeholder={placeholder}
        data-testid={dataTestId}
        aria-label={labelText}
      />
    </div>
  );
};

export default Input;
