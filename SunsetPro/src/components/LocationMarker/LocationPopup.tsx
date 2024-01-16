import { Link } from "react-router-dom";
import { Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSun } from "@fortawesome/free-solid-svg-icons";

export const LocationPopup = (props: {sunsetTime: string | null, city: string}) => {
    return (
        <Popup>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid gap-8 lg:grid-cols-1">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link to="/"><FontAwesomeIcon icon={faSun} className="text-yellow-400" /> {props.sunsetTime}</Link>
                        </h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Here is a list of all the best spots to see the sunset in {props.city}.
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
        </Popup>
    )
}