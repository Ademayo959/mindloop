import Image from 'next/image';
import bg from '@/assets/bg.jpeg'
import logo from '@/assets/logo.png'
import profile1 from '@/assets/profile1.jpeg'
import profile2 from '@/assets/profile2.jpeg'
import profile3 from '@/assets/profile3.jpeg'

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <svg
        className="absolute h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="liquid-glass"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="8"
              result="noise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <Image src={bg} fill priority alt='' className='object-cover -z-10' />
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <header className="font-raleway py-4 sm:py-6 flex justify-between items-center gap-4">

            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Image
                src={logo}
                alt=""
                className="h-9 w-14 sm:h-11 sm:w-17 brightness-90"
              />
              <p className="font-bold text-[1.5rem] sm:text-[2rem] text-white/70 -ml-2 sm:-ml-3">
                Mindloop
              </p>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex gap-3 lg:gap-4">
              <p className="text-[0.95rem] lg:text-[1.1rem] font-semibold text-white/70">
                Features
              </p>
              <p className="text-[0.95rem] lg:text-[1.1rem] font-semibold text-white/70">
                About
              </p>
              <p className="text-[0.95rem] lg:text-[1.1rem] font-semibold text-white/70">
                News
              </p>
              <p className="text-[0.95rem] lg:text-[1.1rem] font-semibold text-white/70">
                Docs
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-2 sm:gap-4 shrink-0">

              <div
                className="
            group relative isolate
            flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center
            overflow-hidden rounded-full
            border border-white/35
            bg-white/[0.08]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]
            backdrop-blur-[0px]
            backdrop-saturate-[1.8]
            transition-all duration-300
            hover:scale-[1.05]
          "
                style={{
                  backdropFilter: 'url(#liquid-glass) blur(0px) saturate(1.4)',
                  WebkitBackdropFilter: 'url(#liquid-glass) blur(0px) saturate(1.4)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  className="relative z-20 text-white/75 sm:w-6 sm:h-6"
                  fill={"currentColor"}
                  viewBox={"0 0 24 24"}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 0 0 0-2.156" />
                  <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
                </svg>
              </div>

              <div
                className="
            group relative isolate
            flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center
            overflow-hidden rounded-full
            border border-white/35
            bg-white/[0.08]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]
            backdrop-blur-[10px]
            backdrop-saturate-[1.8]
            transition-all duration-300
            hover:scale-[1.05]
          "
                style={{
                  backdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                  WebkitBackdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  className="relative z-20 text-white/75 sm:w-6 sm:h-6"
                  fill={"currentColor"}
                  viewBox={"0 0 24 24"}
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                </svg>
              </div>

              <div
                className="
            group relative isolate
            flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center
            overflow-hidden rounded-full
            border border-white/35
            bg-white/[0.08]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]
            backdrop-blur-[10px]
            backdrop-saturate-[1.8]
            transition-all duration-300
            hover:scale-[1.05]
          "
                style={{
                  backdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                  WebkitBackdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  className="relative z-20 text-white/75 sm:w-6 sm:h-6"
                  fill={"currentColor"}
                  viewBox={"0 0 24 24"}
                >
                  <path d="M16.39 11.27c-.09-.04-.17-.08-.26-.12-.15-2.84-1.71-4.47-4.32-4.49h-.04c-1.56 0-2.86.67-3.66 1.88l1.44.98c.6-.91 1.53-1.1 2.22-1.1h.02c.86 0 1.51.26 1.93.74.31.35.51.84.61 1.46-.76-.13-1.59-.17-2.47-.12-2.48.14-4.08 1.59-3.97 3.6.05 1.02.56 1.9 1.43 2.47.73.48 1.68.72 2.66.67 1.3-.07 2.32-.57 3.03-1.47.54-.69.88-1.58 1.03-2.7.62.37 1.08.86 1.33 1.45.43 1 .46 2.65-.89 4-1.18 1.18-2.6 1.69-4.74 1.7-2.38-.02-4.17-.78-5.34-2.26-1.09-1.39-1.66-3.4-1.68-5.97.02-2.57.59-4.58 1.68-5.97 1.17-1.49 2.97-2.25 5.34-2.26 2.39.02 4.22.78 5.43 2.28.59.73 1.04 1.65 1.34 2.73l1.68-.45c-.36-1.32-.92-2.46-1.69-3.4-1.56-1.91-3.83-2.89-6.76-2.91h-.01c-2.92.02-5.17 1-6.68 2.92C3.71 6.64 3.01 9.02 2.99 12c.02 3 .72 5.37 2.06 7.08C6.56 21 8.81 21.98 11.73 22h.01c2.6-.02 4.43-.7 5.94-2.21 1.98-1.97 1.92-4.45 1.26-5.97-.47-1.09-1.36-1.97-2.58-2.56Zm-4.49 4.22c-1.09.06-2.22-.43-2.27-1.47-.04-.78.55-1.64 2.34-1.74.2-.01.41-.02.6-.02.65 0 1.26.06 1.81.18-.21 2.57-1.41 2.99-2.48 3.05" />
                </svg>
              </div>

            </div>
          </header>
          {/* Start of hero section */}
          <div className="font-raleway mt-8 sm:mt-10 md:mt-6">
            {/* Subscribers */}
            <div className="flex items-center gap-3 sm:gap-4 justify-self-center">
              <div className="flex shrink-0">
                <Image
                  src={profile1}
                  alt=""
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border border-white/10"
                />
                <Image
                  src={profile2}
                  alt=""
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border border-white/10 -ml-3 sm:-ml-3.5"
                />
                <Image
                  src={profile3}
                  alt=""
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border border-white/10 -ml-3 sm:-ml-3.5"
                />
              </div>

              <div>
                <p className="text-[0.75rem] sm:text-[0.9rem] font-semibold text-white/70">
                  70,000+ people already subscribed
                </p>
              </div>
            </div>
            {/* Heading */}
            <div className="mt-5 sm:mt-6">
              <div className="justify-self-center px-2">
                <p className="
            font-semibold
            tracking-tight
            text-center
            text-white/80
            text-[2.7rem]
            leading-[0.95]
            sm:text-[3.5rem]
            md:text-[4.5rem]
          ">
                  Focus in a Distracted World
                </p>
              </div>
              <div className="mt-4 sm:mt-3">
                <p className="
            w-full
            max-w-[20rem]
            sm:max-w-[30rem]
            md:w-120
            text-center
            font-semibold
            tracking-tighter
            justify-self-center
            text-[0.9rem]
            sm:text-[1rem]
            leading-relaxed
            text-white/70
            px-2
          ">
                  Tools for deep work and clarity - say goodbye to constant pings
                  and endless tabs. Say hello to intentional productivity
                </p>
              </div>
            </div>
            {/* Glass pill */}
            <div className="justify-self-center w-full px-2 sm:px-0">
              <form
                style={{
                  backdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                  WebkitBackdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                }}
                className="
            mt-8 sm:mt-12
            border border-white/35
            bg-white/[0.08]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]
            flex
            w-full
            max-w-[28rem]
            items-center
            rounded-full
            justify-self-center
            p-1
          "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" min-w-0 flex-1 bg-transparent px-3 sm:px-4 py-2 text-white/70 font-semibold text-xs sm:text-sm outline-none placeholder:text-white/70 placeholder:font-semibold"/>
                <button
                  className="
              group relative isolate
              flex
              h-fit
              shrink-0
              w-fit
              px-4 sm:px-6
              py-2
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border border-white/35
              bg-white/[0.08]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]
              backdrop-blur-[10px]
              backdrop-saturate-[1.8]
              transition-all duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
            "
                  style={{
                    backdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                    WebkitBackdropFilter: 'url(#liquid-glass) blur(6px) saturate(1.4)',
                  }}
                  type="submit">
                  <span className="relative z-10 text-white/80 font-semibold text-xs sm:text-sm whitespace-nowrap">
                    Join Waitlist
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
