export default function TextArea({
    id,
    placeholder,
  }: Readonly<{
    id: string;
    placeholder: string;
  }>) {
    return (
      <textarea
        id={id}
        name={id}
        className="border-2 border-gray-300 rounded py-2 px-4 min-w-[300px] min-h-[300px] w-full flex-1"
        placeholder={placeholder}
      />
    );
  }