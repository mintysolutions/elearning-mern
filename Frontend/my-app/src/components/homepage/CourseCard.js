import React from 'react'

const CourseCard = ({ courseName, courseDetails, coursePrice }) => {
    return (
        <div class="shadow-lg rounded-2xl w-96 p-4 bg-gray-50 hover:bg-blue-50 relative overflow-hidden cursor-pointer">
            <img alt="moto" src="./svg/courseDemoIcon.svg" class="absolute -right-5 -bottom-10 h-40 w-40 mb-4" />
            <div class="w-4/6">
                <p class="text-gray-800 text-lg font-bold mb-2">
                    {courseName}
                </p>
                <p class="text-gray-400 text-xs">
                    {courseDetails}
                </p>
                <p class="text-blue-500 text-xl pt-2 font-medium">
                    ${coursePrice}
                </p>
            </div>
        </div>
    )
}

export default CourseCard