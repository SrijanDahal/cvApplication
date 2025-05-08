function InputField() {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text here..."
      />
    </div>
  );
}

export { InputField };
