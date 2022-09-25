

export default function Loading() {
    return (
        <div className="flex justify-center items-center fixed bg-[#7a7a7a8f] w-[100%] h-[100%] ">
            <div className="absolute left-[50%] top-[50%] -ml-10 -mt-10 spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                {/* <span className="visually-hidden">Loading...</span> */}
            </div>
        </div>
    );
}
