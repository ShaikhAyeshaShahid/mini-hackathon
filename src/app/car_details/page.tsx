import Link from "next/link"
import corolla from "../images/Corolla-X-Cars-.jpg";
import Image from 'next/image';


const page = () => {
  return (
    <div className="items-center justify-center" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e8f1f5' }}>
    <h1 style={{ fontWeight: 'bold', textDecoration: 'underline',  color:"black", fontSize:"30px"}}>
      Toyota Corolla 2024 Price in Pakistan, Images, Reviews &  Specs
    </h1>
    <div className="place-items-center py-3 my-2 ">
    <Image alt="Logo" src= {corolla} width={400} height={200}  />

    
    <p className="py-5" style={{ maxWidth: '900px', margin: '0 auto', color: "black" }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    </p>
    <h2 className="text-2xl" style={{ color: 'green', margin: '20px 0' }}>PKR 50,00,000</h2>
    <Link href="/payment">
      <button style={{ padding: '10px 40px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', margin:'20px' }}>
        Make Payment
      </button>
    </Link>

    </div>

  </div>
  )
}

export default page
