import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CourseContext } from '../../context/CourseContext';
import CurrentViewContext from '../../context/CurrentViewContext'

const CourseCard = ({ course }) => {
    const { setView } = useContext(CurrentViewContext);
    const { setCourse } = useContext(CourseContext);

    return (
        <div onClick={
            () => {
                setCourse(course);
                setView("course");
            }
        }
            className="shadow-lg rounded-2xl w-96 p-4 bg-gray-50 hover:bg-blue-50 relative overflow-hidden cursor-pointer">
            <img alt="moto" src="./svg/courseDemoIcon.svg" className="absolute -right-5 -bottom-10 h-40 w-40 mb-4" />
            <div className="w-4/6">
                <p className="text-gray-800 text-lg font-bold mb-2">
                    {course.name}
                </p>
                <p className="text-gray-600 text-lg">
                    {"Total Hours: " + course.totalHours}
                </p>
                <p className="text-gray-400 text-xs">
                    {course.description}
                </p>
                <p className="text-blue-500 text-xl pt-2 font-medium">
                    ${course.price}
                </p>
            </div>
        </div>
    )
}

export default CourseCard