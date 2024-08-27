import Image from 'next/image';
import Layout from './layout';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-gray-600">Hi I am</p>
          <h1 className="text-2xl font-bold text-orange-600">Mohammad Amir</h1>
          <h2 className="text-6xl font-bold text-gray-800 mt-2">UI & UX</h2>
          <h2 className="text-6xl font-bold text-gray-800 ml-56">Designer</h2>
          <p className="text-gray-600 mt-4 flex text-wrap">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus rutus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            Hire Me
          </button>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center ">
          <div className="relative">
            <div className="absolute top-8 right-28 w-20 h-8 bg-orange-500 opacity-50"></div>
            <Image className='rounded-full border-4 border-orange-600'
              src="/images/profile.png"
              alt="Profile Picture"
              width={300}
              height={300}
              style={{ maxWidth: '120%', height: '85%' }}

            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 flex space-x-4 ml-96 pl-64">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/fb.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/fb.png" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/fb.png" alt="Facebook" width={24} height={24} />
        </a>
      </div>
    </div>
    </Layout>
  );
}
