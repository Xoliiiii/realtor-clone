import React from 'react'

export default function SignIn() {
  return (
    <section>
     <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
     <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG9tZSUyMGV4dGVyaW9yfGVufDB8fDB8fHww" alt="Modern Home Exterior" className="w-full rounded-2xl"/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20" >
          <form> 
            <input type="text" className="w-full" />
          </form>
        </div>
     </div>
    </section>
  )
}
