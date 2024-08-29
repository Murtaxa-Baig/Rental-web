import Link from 'next/link'
import AddAgency from '../(components)/addAgency/AddAgency'


export default function page() {
    return (
        <>
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>New company</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /New company
                </p>
            </div>
            <div className='p-4 bg-white w-full rounded-md'>
                <AddAgency />

            </div>
        </>
    )
}
