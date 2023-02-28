import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { detailCourseAction } from "../../store/features/CourseSlice/CourseSlice";

export default function CourseRegis({ id }) {
  console.log(id);

  return (
    <div>
      {/* {id &&
        id.map((course) => (
          <NavLink
            to={`/detail/${course.maKhoaHoc}`}
            className="hover:underline"
          >
            <div className="flex items-start my-3">
              <div className="px-3">
                <div>Tên Khoá Học: {course.tenKhoaHoc}</div>
              </div>
            </div>{" "}
          </NavLink>
        ))} */}

      {id?.length > 0 ? (
        id.map((course) => (
          <NavLink
            to={`/detail/${course.maKhoaHoc}`}
            className="hover:underline"
          >
            <div className="flex items-start my-3">
              <div className="px-3">
                <div>Tên Khoá Học: {course.tenKhoaHoc}</div>
              </div>
            </div>{" "}
          </NavLink>
        ))
      ) : (
        <div className="text-red-500">Chưa có đăng ký khoá học nào</div>
      )}
    </div>
  );
}
