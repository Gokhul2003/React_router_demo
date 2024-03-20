
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="mb-6 text-center">
                <span className="text-2xl font-bold text-gray-800">Github Followers:</span>
                <span className="block mt-2 text-3xl font-bold text-blue-600">{data.followers}</span>
            </div>
            <img src={data.avatar_url} alt="Git picture" className="rounded-full shadow-lg border-4 border-blue-400" width={300} />
        </div>
    );
}

export default Github;

//recommended to write this in diff file for optimixation
export const githubInfoLoader=async()=>
{
    const response=await fetch("https://api.github.com/users/Gokhul2003")
    return response.json()
}

