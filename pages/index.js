import useSound from 'use-sound';
import Layout from '../components/Layout';

function MusicPlayer() {
  const [play, { stop, isPlaying }] = useSound('/lookatthefacts.mp3');

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
          Look At The Facts (Carry It On)
        </p>
        <p className="text-white text-xs">Buffy Sainte-Marie</p>
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
              <h1 className="font-semibold text-lg">Jonathan Werber's Resume</h1>
              <img src="/jon.png" alt="me" className="h-48 object-cover pt-4" />
            </div>
            <div className="pt-12 pl-5 text-sm leading-4">
              <p>He/Him</p>
              <p>101 years old</p>
              <p>The Americas</p>
              <p className="pt-8">Last Login:</p>
              <p>3/31/2022</p>
            </div>
          </div>
          <div className="flex">
            <table className="table-auto mt-8 text-xs border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 text-sm">Contacting Jon</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2"><a href="mailto:x@jonoftheamericas.com">Send Message</a></td>
                  <td className="px-4 py-2"><a href="https://www.hias.org">Donate to Refugges</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <MusicPlayer />
          <div className="flex">
            <table className="table-auto mt-4 text-sm border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 w-32">Jon's Skillset</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Coding 
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">
                      Javascript, Typescript, React, Redux, Vue, Vuex
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Methodologies
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">
                      Agile, Scrum, Kanban, TDD, BDD
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Creative
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Photoshop, XD, Illustrator, Sketch, Premiere, Ableton Live</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Heroes
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1"><a href="https://jonwerber.github.io/baldwin-gf/">James Baldwin</a>, Phillis Wheatley, Emma Goldman, Hedy Lamarr</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex">
            <table className="table-auto mt-8 text-sm border-2 border-blue-500 w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="text-left pl-4 w-32">Jon's Details</th>
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
                    <div className="bg-blue-100 h-full p-1">Looking for work, but currently contracted to Ford</div>
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
                      A new and exciting creative coding role.
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Hometown:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">Detroit, Michigan, United States of America</div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Education:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 ">
                    <div className="bg-blue-100 h-full p-1">BA, English Lit, Oakland University</div>
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
                      Createive Technologist, Software Engineer, Software Developer, UI Engineer, Front End Developer
                    </div>
                  </td>
                </tr>
                <tr className="text-xs">
                  <td className="pt-1 pl-1 pb-1 font-semibold">
                    <div className="bg-blue-200 text-blue-800 h-full p-1">
                      Quote:
                    </div>
                  </td>
                  <td className="pt-1 pl-1 pb-1">
                    <div className="bg-blue-100 h-full p-1">
                    “Ideas improve. The meaning of words participates in the improvement. Plagiarism is necessary. Progress implies it. It embraces an author's phrase, makes use of his expressions, erases a false idea, and replaces it with the right idea. ” ― Guy Debord (or whoever)
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
            Jon is looking for a creative coding role.
          </div>
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Jon's Blurbs
          </h3>
          <div className="pl-2 pt-2">
            <h4 className="text-orange-600 font-semibold">About me:</h4>
            <p className="text-xs">
            I'm looking for a role on an inclusive team that skews creative and is adamently feminist and anti-racist. 
            </p>
            <h4 className="mt-2 text-orange-600 font-semibold">
              Who I'd like to meet:
            </h4>
            <p className="text-xs">Angela Davis, Courtney Love, Boots Riley, Linus Torvalds, Britney Spears</p>
          </div>
        </section>
        <section className="text-sm">
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Jon's Employers
          </h3>
          <div className="pl-2 pt-2 flex space-x-4">
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">Ford</h5>
              <img
                src="/ford.jpeg"
                alt="ford"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">Ally Bank</h5>
              <img
                src="/ally.jpeg"
                alt="ally"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">UWM</h5>
              <img
                src="/uwm.jpeg"
                alt="uwm"
                className="object-cover border-2 border-black"
              />
            </div>
          </div>
          <div className="pl-2 pt-2 flex space-x-4">
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">Fathead</h5>
              <img
                src="/fathead.jpeg"
                alt="fathead"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">Nexient</h5>
              <img
                src="/nexient.jpeg"
                alt="nexient"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">Sex Lab</h5>
              <img
                src="/uofm.png"
                alt="u of m"
                className="object-cover border-2 border-black"
              />
            </div>
            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">M.A.C.</h5>
              <img
                src="/mac.jpeg"
                alt="MAC"
                className="object-cover border-2 border-black"
              />
            </div>

            <div className="w-16 sm:w-32">
              <h5 className="text-xs font-semibold text-center">TGMI</h5>
              <img
                src="/tgm.jpeg"
                alt="TGM"
                className="object-cover border-2 border-black"
              />
            </div>
          </div>
          <p className="pt-4 text-xs font-semibold text-right text-orange-800">
           More information below
          </p>
        </section>
        <section className="text-sm">
          <h3 className="mt-4 bg-orange-200 text-orange-700 font-semibold pl-4">
            Jon's Employement History
          </h3>
          <p className="pl-2 pt-2 text-xs font-semibold">
            Displaying 5 of 8 Roles
          </p>
          <div className="flex">
            <table className="table-auto mt-2 text-sm w-full">
              <tbody>
                
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          Ford
                        </h6>
                        <img
                          src="/ford.jpeg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        October 2020 - Present
                      </p>
                      <p>Worked on a team in charge of standardizing Ford's log in system across all properties and markets. Worked daily in Typscript and React, with some light Ruby and Java (Spring Boot) on a rare occasion. We followed agile methodologies, test driven development, and clean code</p>
                    </div>
                  </td>
                </tr>
                

                
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          Ally Bank
                        </h6>
                        <img
                          src="/ally.jpeg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        January 2020 - September 2020
                      </p>
                      <p>Was hired to convert a legacy Ember application to React, but ended up on a team leading COVID relief efforts to help those financially impacted by the pandemic by offering loan assistance to those most in need. The code was mostly legacy Ember.</p>
                    </div>
                  </td>
                </tr>
                

                
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          UWM
                        </h6>
                        <img
                          src="/uwm.jpeg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        July 2018 - December 2020
                      </p>
                      <p>I worked as a developer on the marketing technology team, supporting our customer facing products, using vanilla JS, Angular, React and then for our big project Vue. I designed, architected, and did most of the coding for <a href="https://www.uwm.com/grow-your-business/client-connect"> Brand 360</a>, a front end platform to create custom printable pdfs, web graphics, and videos all done on the front end using Vue </p>
                    </div>
                  </td>
                </tr>
                

                
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          Fathead
                        </h6>
                        <img
                          src="/fathead.jpeg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        April 2017 - July 2018
                      </p>
                      <p>I was the front end developer for a small team. We used a lot of legacy jQuery but I helped to migrate as much possible to React. I was also the lead developer and co-designer of our (now shuttered) Wallpaper start up <a href="http://guild-grace.webflow.io">Guild and Grace </a>, for which I wrote custom code to mathmatically place wallpers on dynamic backgrounds naturally.</p>
                    </div>
                  </td>
                </tr>
                

                
                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          Nexient
                        </h6>
                        <img
                          src="/nexient.jpeg"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        February 2015 - October 2016
                      </p>
                      <p>I was contracted to Choice Hotels, working on their then new rewards program coding primarily in Angular.js (the old one), and then to Lulus.com (not Lululemon, I feel the need to point out as this has been assumed many times), migrating their legacy PHP based website into the modern era</p>
                    </div>
                  </td>
                </tr>

                <tr className="text-xs">
                  <td className="pt-1 pl-1 font-semibold">
                    <div className="bg-orange-200 text-orange-800 h-full p-1">
                      <div className="w-16 sm:w-32">
                        <h6 className="text-xs font-semibold text-center mb-2">
                          Other Life Experience 
                        </h6>
                        <img
                          src="/bart.gif"
                          alt="me"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pt-1 pl-1 w-full">
                    <div className="bg-orange-100 h-full p-1">
                      <p className="text-xs font-semibold text-left mb-2">
                        1989 - present
                      </p>
                      <p>
                        I have been coding since about 1995, I have had photographs published in Vogue and Rolling Stone (the crappy back ad part, but it was a goal I achevived as a teen), I have won <a href="https://detroit.cbslocal.com/2015/06/16/hack4detroit-winner-creates-family-friendly-bicycling-app/">hack-a-thons solo (3rd place)</a>, I worked for Transgender Michigan, and Rachel Crandall (founder of Transgender Day of Visibility), I did HIV testing and counseling, I have done public health research to largely benefit the queer community in regards to PREP, I have toured with multiple bands, I have worked on a few hollywood films in a very minor way (Whip It! and Youth in Revolt), I have traveled the world, I have been mugged on 3 continents, I still skateboard and take pictures, and I have lived a beautiful life and only want to make the world a better place. 
                      </p>
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
