import Link from "next/link"
import Image from 'next/image';
import corolla from "../images/Corolla-X-Cars-.jpg";

const Page = () => {
  return (
    <div className="place-items-center" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e8f1f5' }}>
      <h1 className="my-2" style={{ fontWeight: 'bold', textDecoration: 'underline', color: "black", fontSize: "30px" }}>
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews &  Specs
      </h1>
      <Image alt="Logo" src={corolla} width={400} height={200} />

      <div style={{ margin: '20px 0' }}>
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-600 py-2 px-4 border border-blue-400 rounded mx-2">Book a test drive</button>
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-600 py-2 px-4 border border-blue-400 rounded mx-2">Request Bank Finance</button>
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-600 py-2 px-4 border border-blue-400 rounded mx-2">Visit Place</button>
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-600 py-2 px-4 border border-blue-400 rounded mx-2">Car Inspection</button>
      </div>

      <h2 className="text-black text-2xl" style={{ margin: '20px 0', fontWeight: 'bold' }}>Vehicle Description</h2>
      <div className="items-start flex flex-col my-2">
        <p className="text-black my-2"><strong>Number of Doors:</strong> 4 &nbsp; <strong>Engine:</strong> 1800 CC &nbsp; <strong>Condition:</strong> 8.5 / 10 <strong>Driven:</strong> 9,500 KM &nbsp; <strong>Suspension Type:</strong> Soft Suspension</p>
        <p className="text-black my-2"><strong>Avg:</strong> 13 Km per ltr &nbsp; <strong>Transmission:</strong> Automatic &nbsp; <strong>Fuel Type:</strong> High Octane</p>

      </div>
      <h2 className="text-3xl" style={{ color: 'green', margin: '20px 20px' }}>PKR 50,00,000</h2>
      <Link href="/order">
        <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' , margin:'20px' }}>
          Make Payment
        </button>
      </Link>
    </div>
  )
}


export default Page
