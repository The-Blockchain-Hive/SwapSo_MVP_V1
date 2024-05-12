import Image from "next/image";
import Link from "next/link";


const EventCard = () => {
  return (
    <div className="grid xl:grid-cols-3  h-screen">
    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg mx-auto shadow-lg w-1/2 xl:w-4/5 mt-4">
        <h1>.</h1>
      <div className="relative">
        <Image
          src='/metaverse2.png'
          alt="Event Image"
          className="rounded-t-lg mx-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <p className="text-white"> </p>
        <div className="mt-4">
          <Link href="#"
             className="text-blue-500 hover:text-blue-700">Register Now
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventCard;
