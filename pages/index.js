import useSound from 'use-sound';
import Layout from '../components/Layout';

function MusicPlayer() {
  const [play, { stop, isPlaying }] = useSound('/adtr.mp3');

  return (
    <div className="bg-gradient-to-t from-gray-400 to-gray-200 w-full h-full mt-4 border-2 border-gray-600 flex">
      <button
        onClick={() => (isPlaying ? stop() : play())}
        className="bg-gradient-to-t from-gray-500 to-gray-100 h-12 border-2 border-gray-600 rounded-md m-2 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue"
      >
        <svg
          className="m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPlaying ? (
            <>
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </>
          ) : (
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          )}
        </svg>
      </button>
      <div className="bg-gray-900 w-full h-12 rounded-md m-2 ml-0 p-2 pl-3">
        <p className="text-white text-xs font-semibold">
          If It Means A Lot To You
        </p>
        <p className="text-white text-xs">A Day To Remember</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="w-full md:w-1/2 p-8">
        <section>
          <div className="flex">
            <div>
              <h1 className="font-semibold text-lg">Lee</h1>
              <img src="/lee.jpg" alt="me" className="h-48 object-cover pt-4" />
            </div>
            <div className="pt-12 pl-5 text-sm leading-4">
              <p>Male</p>
              <p>16 years old</p>
              <p>Des Moines, IA</p>
              <p>United States</p>
              <p className="pt-8">Last Login:</p>
              <p>10/21/2009</p>
            </div>
          </div>
          <div className="flex">
            <table className="table-auto mt-8 text-xs border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 text-sm">Contacting Lee</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Send Message</td>
                  <td className="px-4 py-2">Forward to Friend</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Add to Friends</td>
                  <td className="px-4 py-2">Add to Favorites</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Instant Message</td>
                  <td className="px-4 py-2">Block User</td>
                </tr>
              </tbody>
            </table>
          </div>
          <MusicPlayer />
          <div className="flex">
            <table className="table-auto mt-4 text-sm border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 w-32">Lee's Interests</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      General
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">
                      Xbox, playing guitar, anything music related, basketball,
                      football
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Movies
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">
                      Step Brothers, Anchorman
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Television
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Prefer movies</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Heroes
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">LeBron James</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 pb-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Music
                    </div>
                  </td>
                  <td className="pt-1 pl-1 pb-1">
                    <div className="bg-blue-100 h-full p-1">
                      I listen to pretty much everything but I like pop punk and
                      alt rock
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex">
            <table className="table-auto mt-8 text-sm border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 w-32">Lee's Details</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Status
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Single</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Here for:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">
                      Dating, Serious Relationships, Friends
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Orientation:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Straight</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Hometown:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Baxter, Iowa</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Body type:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">6'3"</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Education:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">High school</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 pb-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Occupation:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 pb-1">
                    <div className="bg-blue-100 h-full p-1">
                      Professional gamer
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="w-full md:w-1/2 p-8 pt-0 md:pt-8">
        <section className="text-sm">
          <div className="border-black p-6 border-solid border-2 font-medium flex justify-center text-lg">
            Lee is in your extended network
          </div>
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Lee's Blurbs
          </h3>
          <div className="pl-2 pt-2">
            <h4 className="text-orange-600 font-semibold">About me:</h4>
            <p className="text-xs">
              If we listen to the same music, we'll probably be friends
            </p>
            <h4 className="mt-2 text-orange-600 font-semibold">
              Who I'd like to meet:
            </h4>
            <p className="text-xs">John Mayer</p>
          </div>
        </section>
        <section className="text-sm">
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Lee's Friend Space
          </h3>
          <p className="pl-2 pt-2 text-xs font-semibold">Lee has 6 friends.</p>
          <div className="pl-2 pt-2 flex space-x-4">
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">allie</h5>
              <img
                src="/allie.jpg"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">cole</h5>
              <img
                src="/cole.png"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">andrew</h5>
              <img
                src="/andrew.jpg"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
          </div>
          <div className="pl-2 pt-2 flex space-x-4">
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">dylan</h5>
              <img
                src="/dylan.png"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">matt</h5>
              <img
                src="/matt.jpg"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">aj</h5>
              <img
                src="/aj.jpg"
                alt="me"
                className="object-cover border-2 border-black"
              />
            </div>
          </div>
          <p className="pt-4 text-xs font-semibold text-right text-orange-800">
            View All of Lee's Friends
          </p>
        </section>
        <section className="text-sm">
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Lee's Friends Comments
          </h3>
          <p className="pl-2 pt-2 text-xs font-semibold">
            Displaying 1 of 1 comments
          </p>
          <div className="flex">
            <table className="table-auto mt-2 text-sm w-full">
              <tbody>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          allie
                        </h6>
                        <img
                          src="/allie.jpg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        Oct 21 2009 03:20
                      </p>
                      <p>allie owns this xoxoxo</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
