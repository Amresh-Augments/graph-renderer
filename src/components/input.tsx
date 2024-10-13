export default function Input({
  id,
  type,
  placeholder,
  value,
  onChange,
}: Readonly<{
  id: string;
  type: HTMLInputElement["type"];
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      className="border-2 border-gray-300 rounded py-2 px-4 min-w-[200px] w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}