import { Link } from "react-router-dom";
import { Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSun } from "@fortawesome/free-solid-svg-icons";
import { useMarkerContext } from '../../contexts/markerContext';

export const LocationPopup = ({
    sunsetTime,
    city
}: {
    sunsetTime: string | null;
    city: string
}) => {

    const { isLoading } = useMarkerContext();
    return (

        <Popup>
            {isLoading
                ?
                <div className="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                    {/* <section className="bg-white dark:bg-gray-900">
                        <div className="grid gap-8 lg:grid-cols-1">
                            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link to="/"><FontAwesomeIcon icon={faSun} className="text-yellow-400" /> {sunsetTime}</Link>
                                </h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                    Here is a list of all the best spots to see the sunset in {city}.
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            className="w-7 h-7 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                            alt="Author avatar"
                                        />
                                        <span className="font-medium dark:text-white">Ana Coelho</span>
                                    </div>
                                    <Link
                                        to="/article"
                                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                    >
                                        Read more
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="ml-2 w-4 h-4">
                                        </FontAwesomeIcon>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </section> */}
                    <div
                        role="status"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid gap-8 lg:grid-cols-1">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <Link to="/"><FontAwesomeIcon icon={faSun} className="text-yellow-400" /> {sunsetTime}</Link>
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                Here is a list of all the best spots to see the sunset in {city}.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img
                                        className="w-7 h-7 rounded-full"
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                        alt="Author avatar"
                                    />
                                    <span className="font-medium dark:text-white">Ana Coelho</span>
                                </div>
                                <Link
                                    to="/article"
                                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                >
                                    Read more
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2 w-4 h-4">
                                    </FontAwesomeIcon>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            }
        </Popup>
    )
}