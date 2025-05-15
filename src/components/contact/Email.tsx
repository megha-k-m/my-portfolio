const Email = () => {
  return (
    <div className="mx-auto p-2">
      <div className="font-bold text-blue-600 text-2xl">Send Me a Message</div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 mt-5">
        <div className="w-full flex flex-col">
          <label className="text-md font-bold m-2">Name </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md px-3 py-2"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-md font-bold m-2">Email </label>
          <input
            type="text"
            placeholder="Enter your Email Id"
            className="border rounded-md px-3 py-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-md font-bold m-2">Subject </label>
        <input
          type="text"
          placeholder="Subject"
          className="border rounded-md px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-md font-bold m-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={5}
          //   value={message}
          //   onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      </div>
      <div className="w-full  bg-blue-600 hover:bg-blue-800 rounded-md mt-4 text-center">
        <button className="px-5 py-2  text-white rounded-md text-base transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Email;
