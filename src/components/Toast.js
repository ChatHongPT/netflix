const Toast = ({ message }) => (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
      {message}
    </div>
  );
  
  export default Toast;
  