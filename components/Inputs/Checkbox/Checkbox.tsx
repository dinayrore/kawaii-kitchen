interface CheckboxProps {
  id: string;
  className?: string;
  value: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, className, value, label }) => {
  return (
    <>
      <input type="checkbox" id={id} className={className} value={value} />
      <label>{label}</label>
    </>
  );
};

export default Checkbox;
