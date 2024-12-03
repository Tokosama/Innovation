import SectionPost from "./SectionPost"
import SectionTags from "./SectionTags"

function SectionPostTags() {

    return (
      <>
      <div className="pl-16">
            
      <div className="mb-11">
  <form action="">
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="block w-full rounded-sm border px-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </span>
    </div>
  </form>
</div>

            <SectionPost/>
            <SectionTags/>
            

                

      </div>
     
     
      </>
    )
  }
  
  export default SectionPostTags
  