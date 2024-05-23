import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";


const EventCard = () => {
  return (
    <>
      <head>
        <title>Events</title>
        <meta name="Events Page" content="All the events, past or upcoming can be seen here." />
      </head>
      <p className="m-4 text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-100 font-comfortaa font-semibold">COMMUNITY EVENTS</p>
    <div className="grid xl:grid-cols-3 h-max bg-black">
    <div className="bg-gradient-to-b from-indigo-500 to-blue-1150 rounded-3xl mx-auto  border border-white shadow-lg border border-white xl:w-4/5 mt-8 text-center ">
      <div className="relative">
        <Image
          src='/mumbai.png'
          alt="Event Image"
          className="object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Mumbai</p>
        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa font-comfortaa"> IIT Bombay Campus, Powai.</p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1"><FaRegCalendarAlt /></span>
          <p className="ml-4 font-comfortaa font-comfortaa">DATE: 8th JUNE</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/061922729d10448ca70e5edcec3f77c63" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-red-800 to-blue-1150 rounded-3xl mx-auto border border-white shadow-lg xl:w-4/5 mt-8 text-center">
      <div className="relative">
        <Image
          src='/delhi.png'
          alt="Event Image"
          className="object-cover object-top w-full object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Delhi</p>

        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa"> TBA</p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1"><FaRegCalendarAlt /></span>
          <p className="ml-4 font-comfortaa">DATE: TBA</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/d23cfe7c419544a380b42147b434e41e8" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-b from-cyan-900 to-blue-1150 rounded-3xl mx-auto  border border-white shadow-lg xl:w-4/5 mt-8 text-center">
      <div className="relative">
        <Image
          src='/bangalore.png'
          alt="Event Image"
          className="object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Bangalore</p>

        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa"> TBA </p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1"><FaRegCalendarAlt /></span>
          <p className="ml-4 font-comfortaa">DATE: 29th MAY 2024</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/08c2091ab97c4c02ba5cf122e6cf0a6e9" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-green-800 to-blue-1150 rounded-3xl mx-auto  border border-white shadow-lg xl:w-4/5 mt-8 text-center mb-8">
      <div className="relative">
        <Image
          src='/pune.png'
          alt="Event Image"
          className="object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Pune</p>

        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa"> TBA</p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1">     <span className="mt-1"><FaRegCalendarAlt /></span></span>
          <p className="ml-4 font-comfortaa">DATE: 5th JUNE</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/75ba42b9d92d44e9bf1143215360d3907" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-pink-600 to-blue-1150 rounded-3xl mx-auto  border border-white shadow-lg xl:w-4/5 mt-8 text-center mb-8">
      <div className="relative">
        <Image
          src='/jaipur.png'
          alt="Event Image"
          className="object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Jaipur</p>

        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa"> TBA</p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1"><FaRegCalendarAlt /></span>
          <p className="ml-4 font-comfortaa">DATE: TBA</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/06cf424a6c584136960618a0cecf61249" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-b from-yellow-500 to-blue-1150 rounded-3xl mx-auto  border border-white shadow-lg xl:w-4/5 mt-8 text-center mb-8">
      <div className="relative">
        <Image
          src='/chennai.png'
          alt="Event Image"
          className="object-cover object-top w-full rounded-3xl mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
      <p className="font-bold text-xl">SwapSo Community Call, Chennai</p>

        <div className="flex items-center mt-4">
          <FaMapMarkerAlt />
          <p className="ml-4 font-comfortaa"> TBA</p>
        </div>
        <div className="flex item-center mt-4">
          <span className="mt-1"><FaRegCalendarAlt /></span>
          <p className="ml-4 font-comfortaa">DATE: 1st JUNE</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="https://mint.nuvo.bi/ax/786fea0ab8564e54bab442c1216b340e4" target="_blank"
             className="text-white"><button className="bg-cyan-500 p-3 rounded-3xl">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default EventCard;
