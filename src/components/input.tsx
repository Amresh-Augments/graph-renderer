export default function Input({
    id,
    type,
    placeholder,
  }: Readonly<{
    id: string;
    type: HTMLInputElement["type"];
    placeholder: string;
  }>) {
    return (
      <input
        id={id}
        name={id}
        type={type}
        className="border-2 border-gray-300 rounded py-2 px-4 min-w-[300px] w-full text-black"
        placeholder={placeholder}
      />
    );
  }