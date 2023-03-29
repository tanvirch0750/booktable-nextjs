import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between items-center text-[#0f1f47]">
          <a href="" className="font-bold text-gray-700 text-2xl">
            BookTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-2 px-4 rounded mr-3 text-lg">
                Signin
              </button>
              <button className="border p-2 rounded px-4 text-lg">
                Signup
              </button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              <div className="text-left py-3 m-auto flex justify-center items-center">
                <input
                  type="text"
                  placeholder="State, city or town"
                  className="rounded text-lg mr-3 p-2 w-[450px] mt-4"
                />
                <button className="bg-red-600 px-9 text-white py-3 mt-4 rounded">
                  Let's go
                </button>
              </div>
            </div>
          </header>
          {/* HEADER */}

          {/* CARDS */}
          <section className="py-3 px-36 mt-10 flex flex-wrap">
            {/* card */}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer ">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-medium/2/51464796.jpg"
                alt="food image"
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestoned Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2 tracking-wide text-lg">*****</div>
                  <p className="ml-2 font-semibold">77 reviews </p>
                </div>
                <div className="flex font-light capitalize">
                  <p className="text-reg mr-3">Mexican</p>
                  <p className="mr-2">$500</p>
                  <p>Torornto</p>
                </div>
                <p className="text-sm mt-1 fonst-bold">Booked 3 times today</p>
              </div>
            </div>
            {/* card */}
          </section>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
