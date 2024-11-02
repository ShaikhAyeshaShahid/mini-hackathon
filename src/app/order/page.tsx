import Link from 'next/link';

const page = () => {
  
  
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e8f1f5' }}>
  <h1 className="my-2" style={{ fontWeight: 'bold', color: "black", fontSize: "30px" }}>
    Enter your Details
  </h1>
  <form 
        className='w-full' 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}
      >
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          style={inputStyle} 
          required 
          pattern="[A-Za-z\s]+" 
          title="Please enter a valid name using only letters and spaces."
        />

        <input 
          type="email" 
          placeholder="Enter Your Email" 
          style={inputStyle} 
          required 
          title="Please enter a valid email address."
        />

        <input 
          type="text" 
          placeholder="Card Number" 
          style={inputStyle} 
          required 
          pattern="\d{16}" 
          title="Card number must be exactly 16 digits."
        />

        <input 
          type="text" 
          placeholder="Address" 
          style={inputStyle} 
          required 
          title="Please enter your address."
        />

        <Link href="/thank_you">
          <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', margin: '20px' }}
          >
            Place your order
          </button>
        </Link>
      </form>
</div>

  )
}

const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };
export default page
