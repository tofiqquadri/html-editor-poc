import dynamic from 'next/dynamic';

const TinyDocsClient = dynamic(() => import('../../components/TinyDocs/TinyDocs'), {
    loading: () => (
        <div className="flex items-center justify-center h-[400px] border border-gray-200 rounded-lg">
            <div className="text-gray-500">Loading editor...</div>
        </div>
    )
});
type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <TinyDocsClient />
        </div>
    );
};

export default page;
