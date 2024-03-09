// components/EmailAlreadyRegisteredMessage.js

import Link from 'next/link';

const EmailAlreadyRegisteredMessage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Email Already Registered</h1>
            <p className="text-lg mb-4">The email you provided is already registered.</p>
            <p className="text-lg mb-4">If you believe this is a mistake, please contact support.</p>
            <Link href="/">
                <p className="text-blue-600 hover:underline">Go Back to Homepage</p>
            </Link>
        </div>
    );
};

export default EmailAlreadyRegisteredMessage;
