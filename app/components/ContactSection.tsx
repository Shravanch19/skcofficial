export default function ContactSection() {
  return (
    <section id="Contact" className="mt-12 sm:mt-24 px-4 sm:px-0 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6 sm:mb-12">
        Contact
      </h2>
      <form
        className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50"
        action="https://formsubmit.co/shravan190805@gmail.com"
        method="POST"
      >
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 sm:p-3 text-sm sm:text-base bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 sm:p-3 text-sm sm:text-base bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 sm:p-3 text-sm sm:text-base bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              rows={4}
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 sm:mt-8 w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}