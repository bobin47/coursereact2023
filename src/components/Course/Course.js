import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { allCourseAction } from "../../store/features/CourseSlice/CourseSlice";

export default function Course({ category }) {
  const dispatch = useDispatch();
  const { Courses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(allCourseAction());
  }, []);

  const newArr = Courses?.filter((course) => {
    return course.danhMucKhoaHoc.maDanhMucKhoahoc === category;
  });

  return (
    <>
      {/* <div className="text-black col-span-3 ">
        <div>
          <img
            className="w-full h-full rounded-3xl"
            src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
            alt="hinh"
          />
        </div>
        <div>
          <div className="text-lg font-bold capitalize py-2 px-3">
            ten khoa hoc
          </div>
          <div className="text-sm capitalize px-3">luot xem: 10</div>
        </div>
      </div> */}
      {newArr &&
        newArr.map((course, index) => {
          return (
            <NavLink
              key={index}
              to={`/detail/${course.maKhoaHoc}`}
              className="text-black col-span-3"
            >
              <div>
                <img
                  className="w-full h-[200px] rounded-3xl border"
                  src={course.hinhAnh}
                  alt="hinh"
                />
              </div>
              <div>
                <div className="text-base font-bold capitalize py-2 px-3">
                  {course.tenKhoaHoc}
                </div>
                <div className="text-sm capitalize px-3">
                  luot xem:{course.luotXem}
                </div>
              </div>
            </NavLink>
          );
        })}
    </>
  );
}
