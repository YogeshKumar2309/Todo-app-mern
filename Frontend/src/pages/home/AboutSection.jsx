import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
          About Our Todo App
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This Todo App is designed to help you organize your tasks efficiently.
          You can add new tasks, track pending and completed tasks, and stay
          productive every day.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-6">
          <div className="bg-indigo-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">✔ Add Todos</h3>
            <p className="text-gray-600">
              Quickly add tasks with a simple and user-friendly interface.
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">✔ Track Progress</h3>
            <p className="text-gray-600">
              Manage your pending and completed tasks effortlessly.
            </p>
          </div>
          <div className="bg-pink-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">✔ Easy Navigation</h3>
            <p className="text-gray-600">
              Navigate between pending and done tasks with just one click.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">✔ Responsive Design</h3>
            <p className="text-gray-600">
              Access your tasks from any device with a clean responsive UI.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-500 text-sm">
          Made with ❤️ using <span className="text-indigo-500 font-semibold">React</span> &amp; <span className="text-purple-500 font-semibold">Node.js</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
