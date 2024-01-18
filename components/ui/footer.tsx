import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
          
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
            <li className="mb-2">
                <a href="https://form.berrylab.xyz/node" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="https://berrylab.xyz/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Mobile App</a>
              </li>
              <li className="mb-2">
                <a href="https://node.berrylab.xyz/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Node Provider</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://docs.berrylab.xyz/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="https://r.berrylab.xyz/support" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support</a>
              </li>
              <li className="mb-2">
                <a href="https://brandkit.berrylab.xyz/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Brand Kit</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Social</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://twitter.com/BerryLabxyz" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">X</a>
              </li>
              <li className="mb-2">
                <a href="https://r.berrylab.xyz/discord" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Discord</a>
              </li>
              <li className="mb-2">
                <a href="http://github.com/berryLabxyz/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">GitHub</a>
              </li>
            </ul>
          </div>

     {/* 5st block */}
     <div className="sm:col-span-12 lg:col-span-3">
          
          </div>

        </div>

       
      </div>
    </footer>
  )
}
