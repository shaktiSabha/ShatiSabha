import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          History of Women Empowerment
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Early Movements</h2>
            <p className="text-gray-600">
              The women's rights movement began in the 19th century with the fight for suffrage and basic legal rights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mid-20th Century</h2>
            <p className="text-gray-600">
              The 1960s and 70s saw significant progress in workplace rights, reproductive rights, and educational opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modern Era</h2>
            <p className="text-gray-600">
              Today's movement focuses on equality in leadership, closing the wage gap, and addressing gender-based discrimination.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Timeline of Progress</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gray-800 rounded-full mr-4"></span>
              1920: Women's right to vote established in the United States
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gray-800 rounded-full mr-4"></span>
              1963: Equal Pay Act passed
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gray-800 rounded-full mr-4"></span>
              1972: Title IX enacted, ensuring equal education opportunities
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page