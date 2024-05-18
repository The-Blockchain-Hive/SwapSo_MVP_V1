import Image from "next/image";
import Link from "next/link";


const EventCard = () => {
  return (
    <>
      <head>
        <title>Events</title>
        <meta name="Events Page" content="All the events, past or upcoming can be seen here." />
      </head>
    <div className="grid xl:grid-cols-3 h-screen">
    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="m-4">MUMBAI</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="text-xl m-4">DELHI</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="m-4">BENGALURU</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="m-4">PUNE</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="m-4">JAIPUR</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-black rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4 text-center">
        <h1 className="m-4">CHENNAI</h1>
      <div className="relative">
        <Image
          src='/events.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={330}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4 text-center">
          <Link href="#"
             className="text-black hover:text-white"><button className="bg-cyan-400 p-3 rounded-lg">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default EventCard;
