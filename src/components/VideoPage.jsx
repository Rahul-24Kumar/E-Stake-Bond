import Image from "next/image";

const VideoPage = () => {
    return (
        <div className="min-h-screen">
            {/* Top Section */}
            <section className="py-16 px-4 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Make Your Day Brighter</h1>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Associate has a rich experience across a wide field of industries
                            including Corporate Finance, Banking, Real Estate Development, and Consulting AI. 
                            Provide exceptional client services while upholding the highest professional standards.
                        </p>
                        <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-600 transition">
                            See More
                        </button>
                    </div>

                    {/* Video Section */}
                    <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/Pg0RGMnempw"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            {/* Uncomment if you want to include a bottom section for another video */}
            {/* 
            <section className="py-16 px-4 lg:px-24 bg-gray-100">
                <div className="max-w-7xl mx-auto space-y-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-900">Make Your Day Brighter</h2>

                    <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/another-video-id" // Replace with your actual YouTube link
                            title="Video Title"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p className="text-center text-lg text-gray-700">
                        Associate has a rich experience across a wide field of industries including Corporate Finance, Banking, 
                        Real Estate Development, and Consulting AI. Provide exceptional client services while upholding 
                        the highest professional standards.
                    </p>
                </div>
            </section>
            */}
        </div>
    );
};

export default VideoPage;
