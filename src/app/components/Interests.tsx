import InterestModal from "./Interest"

const Interests  = () => {
    const Interest = [
        {gitTitle: "u-239/React/button not responsive", stars:"125", color:"bg-yellow-500", language:"Javascript", date:"Aug 1"},
        {gitTitle: "firebase/React-Todo app", stars:"117", color:"bg-red-500", language:"Ruby", date:"Dec 19"},
        {gitTitle: "neon-db/server-error", stars:"93", color:"bg-blue-500", language:"Typescript", date:"Jan 12"},
        {gitTitle: "upstach/search-querry/animate-spin", stars:"117", color:"bg-orange-500", language:"Rust", date:"Mar 17"},
        {gitTitle: "redis/connetion-error", stars:"98", color:"bg-blue-500", language:"Go", date:"April 11"},
        {gitTitle: "hedera/smart-contracts", stars:"177", color:"bg-blue-500", language:"Typescipt", date:"Mar 14"},
        {gitTitle: "Backpack/frontend-ui", stars:"119", color:"bg-yellow-500", language:"Javascript", date:"Oct 28"}
    ];
    return (
        <div className="mt-4 max-w-lg mx-auto px-4 ">
            <h1 className="text-xl mb-2 font-normal">Here what you intersets for</h1>
            {Interest.map((interest) => (
                <InterestModal key={interest.gitTitle}
                title={interest.gitTitle} stars={interest.stars} color={interest.color} language={interest.language} date={interest.date} />
            ))}
        </div>
    )
}

export default Interests
