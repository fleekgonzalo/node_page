export default function FeaturesBlocks() {
  return (


    
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What makes us stand out</h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="https://static.berrylab.cloud/node_page/performance.svg" alt="BerryLab performance" style={{ width: '5em', height: '5em', margin: 'auto', padding:"0.5em" }} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Performance</h4>
              <p className="text-gray-600 text-center">We operate high-performance servers with backups always ready to jump into action. This means projects are in safe and capable hands, day and night.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="https://static.berrylab.cloud/node_page/reliability.svg" alt="BerryLab performance" style={{ width: '5em', height: '5em', margin: 'auto', padding:"0.5em" }} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Reliability</h4>
              <p className="text-gray-600 text-center">Guaranteeing smooth and efficient node and validation operations with robust, consistently supervised servers, ensuring top-tier performance around the clock.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="https://static.berrylab.cloud/node_page/monitoring.svg" alt="BerryLab performance" style={{ width: '5em', height: '5em', margin: 'auto', padding:"0.5em" }} />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Monitoring</h4>
              <p className="text-gray-600 text-center">We're always on our toes. We constantly monitor our server performance and make upgrades whenever necessary. It's all about staying ahead of the curve for us.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}