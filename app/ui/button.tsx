
export default function Button({ buttonText }: { buttonText: string }) {
    return (
        <div className='mt-5'>
            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition border border-blue-600 outline-2">
                {buttonText}
            </button>
        </div>
    );
}