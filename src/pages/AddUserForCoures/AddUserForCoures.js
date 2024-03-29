import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  listUserAcceptAction,
  listUserNotAcceptAction,
  ghiDanhAction,huyGhiDanhAction
} from "../../store/features/CourseSlice/CourseSlice";
import { Space, Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { size } from "@floating-ui/react-dom";


export default function AddUserForCoures() {
  const dispatch = useDispatch();
  const params = useParams();
  const { listUserNotAccept, listUserAccept, mess } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    const a = {
      maKhoaHoc: params.id,
    };
    dispatch(listUserNotAcceptAction(a));
    dispatch(listUserAcceptAction(a));
  }, [dispatch, params]);

  const accept = (data) => {
    const datas = {
      maKhoaHoc: params.id,
      taiKhoan: data.taiKhoan,
    };
    dispatch(ghiDanhAction(datas));
    toast.success(mess)
  };

  const notAccept = (data) => {
    const datas = {
      maKhoaHoc: params.id,
      taiKhoan: data.taiKhoan,
    };

    console.log(datas)
    dispatch(huyGhiDanhAction(datas));
    // toast.success(mess);
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Bí danh",
      dataIndex: "biDanh",
      key: "biDanh",
    },
  ];

  const column = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Action",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <div className="flex items-center">
          <div onClick={() => accept(record)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3 cursor-pointer text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <svg
            onClick={() => notAccept(record)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ),
    },
  ];

  const dataSources = listUserAccept;
  const dataSource = listUserNotAccept;

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className=" col-span-6">
        <div className="text-black font-bold text-3xl mb-5">
          Danh Sách Chờ Xét Duyệt
        </div>
        <Table
          dataSource={dataSource}
          columns={column}
          pagination={{ pageSize: 5, total: listUserNotAccept.length }}
        />
      </div>
      <div className=" col-span-6">
        <div className="text-black font-bold text-3xl mb-5">
          Danh Sách Chờ đã Xét Duyệt
        </div>
        <Table
          dataSource={dataSources}
          columns={columns}
          pagination={{ pageSize: 5, total: listUserAccept.length }}
        />
      </div>
    </div>
  );
}
